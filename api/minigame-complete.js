const { getStudent, setStudent } = require("../lib/redis");
const { requireSession } = require("../lib/auth");

const COOLDOWN_MS = 24 * 60 * 60 * 1000;

// Daily Challenge mini-game: unlike regular challenges (best-attempt only,
// see challenge-complete.js), each completed run ADDS to miniGamePoints —
// the whole point is to reward coming back daily to revise old vocab. The
// 24h cooldown is enforced here, not just client-side, so a student can't
// just replay this endpoint for unlimited points.
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const session = await requireSession(req, res);
  if (!session) return;

  const { points } = req.body || {};
  if (typeof points !== "number" || points < 0) {
    return res.status(400).json({ error: "points is required" });
  }

  try {
    const email = session.email;
    const student = await getStudent(email);
    student.name = session.name;

    const last = student.lastMiniGameAt || 0;
    const elapsed = Date.now() - last;
    if (elapsed < COOLDOWN_MS) {
      return res.status(429).json({ error: "Too soon", retryAfterMs: COOLDOWN_MS - elapsed });
    }

    student.miniGamePoints = (student.miniGamePoints || 0) + points;
    student.lastMiniGameAt = Date.now();
    student.totalPoints =
      Object.values(student.completed).reduce((sum, p) => sum + p, 0) + student.miniGamePoints;
    student.updatedAt = Date.now();
    await setStudent(email, student);
    res.status(200).json({
      ok: true,
      totalPoints: student.totalPoints,
      miniGamePoints: student.miniGamePoints,
      lastMiniGameAt: student.lastMiniGameAt,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not save progress" });
  }
};
