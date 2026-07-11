// Shared helper for reading the current session out of a request.
// Used by every protected /api/*.js function.

const { getSession } = require("./redis");

function getSessionIdFromReq(req) {
  // Vercel's Node runtime parses cookies into req.cookies automatically.
  if (req.cookies && req.cookies.session) return req.cookies.session;

  // Fallback manual parse, in case req.cookies isn't populated for some reason.
  const raw = req.headers && req.headers.cookie;
  if (!raw) return null;
  const match = raw
    .split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith("session="));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

async function getSessionFromReq(req) {
  const id = getSessionIdFromReq(req);
  if (!id) return null;
  return await getSession(id);
}

// Convenience for endpoints that require a logged-in student or teacher.
async function requireSession(req, res) {
  const session = await getSessionFromReq(req);
  if (!session) {
    res.status(401).json({ error: "Not signed in" });
    return null;
  }
  return session;
}

// Convenience for endpoints (dashboard, reset) that only the teacher may call.
async function requireTeacher(req, res) {
  const session = await getSessionFromReq(req);
  if (!session) {
    res.status(401).json({ error: "Not signed in" });
    return null;
  }
  if (session.role !== "teacher") {
    res.status(403).json({ error: "Teacher access only" });
    return null;
  }
  return session;
}

module.exports = { getSessionIdFromReq, getSessionFromReq, requireSession, requireTeacher };
