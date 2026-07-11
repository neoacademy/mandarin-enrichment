const { OAuth2Client } = require("google-auth-library");
const { createSession } = require("../../lib/redis");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const ALLOWED_DOMAIN = (process.env.ALLOWED_DOMAIN || "").toLowerCase();
const TEACHER_EMAILS = (process.env.TEACHER_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }
  if (!GOOGLE_CLIENT_ID) {
    return res.status(500).json({ error: "Server is missing GOOGLE_CLIENT_ID" });
  }

  const { credential } = req.body || {};
  if (!credential) {
    return res.status(400).json({ error: "Missing credential" });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = (payload.email || "").toLowerCase();

    if (!payload.email_verified) {
      return res.status(401).json({ error: "Google email is not verified" });
    }
    if (ALLOWED_DOMAIN && !email.endsWith(`@${ALLOWED_DOMAIN}`)) {
      return res.status(403).json({ error: `Please sign in with your @${ALLOWED_DOMAIN} account` });
    }

    const role = TEACHER_EMAILS.includes(email) ? "teacher" : "student";
    const sessionPayload = {
      email,
      name: payload.name || email,
      picture: payload.picture || null,
      role,
    };
    const sessionId = await createSession(sessionPayload);

    res.setHeader(
      "Set-Cookie",
      `session=${sessionId}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`
    );
    res.status(200).json({ ok: true, role, name: sessionPayload.name, email });
  } catch (e) {
    console.error(e);
    res.status(401).json({ error: "Could not verify Google sign-in" });
  }
};
