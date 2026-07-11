// Shared Redis helpers used by every /api/*.js serverless function.
// Vercel functions are stateless between invocations, so student
// progress (points, completed challenges, current location) lives in
// Upstash Redis instead of a local in-memory object.
//
// Requires two environment variables, set in the Vercel project
// settings (see README.md): UPSTASH_REDIS_REST_URL and
// UPSTASH_REDIS_REST_TOKEN.

const { Redis } = require("@upstash/redis");
const crypto = require("crypto");

const redis = Redis.fromEnv();

// Students are now keyed by their verified school email (from Google
// sign-in) rather than a self-reported name, since identity is no longer
// something the client can just claim in a request body.
const INDEX_KEY = "students:index"; // a Redis Set of every student email seen

function studentKey(email) {
  return `student:${email}`;
}

async function getStudent(email) {
  const record = await redis.get(studentKey(email));
  return (
    record || {
      completed: {},
      totalPoints: 0,
      location: null,
      // Daily Challenge mini-game: points accumulate across daily plays
      // (unlike best-attempt challenges), gated by a 24h cooldown on
      // lastMiniGameAt.
      miniGamePoints: 0,
      lastMiniGameAt: null,
    }
  );
}

async function setStudent(email, record) {
  await redis.sadd(INDEX_KEY, email);
  await redis.set(studentKey(email), record);
}

async function getAllStudents() {
  const emails = await redis.smembers(INDEX_KEY);
  if (!emails.length) return {};
  const keys = emails.map(studentKey);
  const records = await redis.mget(...keys);
  const result = {};
  emails.forEach((email, i) => {
    if (records[i]) result[email] = records[i];
  });
  return result;
}

async function resetAll() {
  const emails = await redis.smembers(INDEX_KEY);
  if (emails.length) {
    await redis.del(...emails.map(studentKey));
  }
  await redis.del(INDEX_KEY);
}

// ------------------------------------------------------------------
// Sessions: created after a Google sign-in is verified. The cookie only
// holds an unguessable random ID; the actual identity (email, name,
// role) lives here in Redis with a TTL so it expires on its own.
// ------------------------------------------------------------------
const SESSION_TTL_SECONDS = 8 * 60 * 60; // 8 hours - roughly a school day

function sessionKey(id) {
  return `session:${id}`;
}

async function createSession(payload) {
  const id = crypto.randomBytes(24).toString("hex");
  await redis.set(sessionKey(id), payload, { ex: SESSION_TTL_SECONDS });
  return id;
}

async function getSession(id) {
  if (!id) return null;
  return await redis.get(sessionKey(id));
}

async function deleteSession(id) {
  if (!id) return;
  await redis.del(sessionKey(id));
}

module.exports = {
  getStudent,
  setStudent,
  getAllStudents,
  resetAll,
  createSession,
  getSession,
  deleteSession,
};
