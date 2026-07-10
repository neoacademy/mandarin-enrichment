const { getStudent, setStudent } = require("../lib/redis");

// Re-completing a challenge only raises the score if the new attempt is
// better, so totals aren't inflated by replaying the same challenge.
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }
  const { name, challengeKey, points, location } = req.body || {};
  if (!name || typeof name !== "string" || !challengeKey || typeof points !== "number") {
    return res.status(400).json({ error: "name, challengeKey and points are required" });
  }
  try {
    const student = await getStudent(name);
    const prevBest = student.completed[challengeKey] || 0;
    student.completed[challengeKey] = Math.max(prevBest, points);
    student.totalPoints = Object.values(student.completed).reduce((sum, p) => sum + p, 0);
    if (location) student.location = location;
    student.updatedAt = Date.now();
    await setStudent(name, student);
    res.status(200).json({ ok: true, totalPoints: student.totalPoints });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not save progress" });
  }
};
