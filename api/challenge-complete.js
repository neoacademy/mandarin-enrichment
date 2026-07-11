const { getStudent, setStudent } = require("../lib/redis");
const { requireSession } = require("../lib/auth");

// Re-completing a challenge only raises the score if the new attempt is
// better, so totals aren't inflated by replaying the same challenge.
//
// Identity comes from the verified session (Google sign-in), not from the
// request body — a client can no longer claim to be a different student.
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const session = await requireSession(req, res);
  if (!session) return;

  const { challengeKey, points, location } = req.body || {};
  if (!challengeKey || typeof points !== "number") {
    return res.status(400).json({ error: "challengeKey and points are required" });
  }

  try {
    const email = session.email;
    const student = await getStudent(email);
    student.name = session.name;
    const prevBest = student.completed[challengeKey] || 0;
    student.completed[challengeKey] = Math.max(prevBest, points);
    student.totalPoints =
      Object.values(student.completed).reduce((sum, p) => sum + p, 0) + (student.miniGamePoints || 0);
    if (location) student.location = location;
    student.updatedAt = Date.now();
    await setStudent(email, student);
    res.status(200).json({ ok: true, totalPoints: student.totalPoints });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not save progress" });
  }
};
