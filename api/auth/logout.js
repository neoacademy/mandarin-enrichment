const { getSessionIdFromReq } = require("../../lib/auth");
const { deleteSession } = require("../../lib/redis");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }
  const sessionId = getSessionIdFromReq(req);
  await deleteSession(sessionId);
  res.setHeader("Set-Cookie", "session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0");
  res.status(200).json({ ok: true });
};
