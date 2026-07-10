// Shared Redis helpers used by every /api/*.js serverless function.
// Vercel functions are stateless between invocations, so student
// progress (points, completed challenges, current location) lives in
// Upstash Redis instead of a local in-memory object.
//
// Requires two environment variables, set in the Vercel project
// settings (see README.md): UPSTASH_REDIS_REST_URL and
// UPSTASH_REDIS_REST_TOKEN.

const { Redis } = require("@upstash/redis");

const redis = Redis.fromEnv();

const INDEX_KEY = "students:index"; // a Redis Set of every student name seen

function studentKey(name) {
  return `student:${name}`;
}

async function getStudent(name) {
  const record = await redis.get(studentKey(name));
  return record || { completed: {}, totalPoints: 0, location: null };
}

async function setStudent(name, record) {
  await redis.sadd(INDEX_KEY, name);
  await redis.set(studentKey(name), record);
}

async function getAllStudents() {
  const names = await redis.smembers(INDEX_KEY);
  if (!names.length) return {};
  const keys = names.map(studentKey);
  const records = await redis.mget(...keys);
  const result = {};
  names.forEach((name, i) => {
    if (records[i]) result[name] = records[i];
  });
  return result;
}

async function resetAll() {
  const names = await redis.smembers(INDEX_KEY);
  if (names.length) {
    await redis.del(...names.map(studentKey));
  }
  await redis.del(INDEX_KEY);
}

module.exports = { getStudent, setStudent, getAllStudents, resetAll };
