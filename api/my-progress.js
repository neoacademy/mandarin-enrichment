const { getStudent } = require("../lib/redis");
const { requireSession } = require("../lib/auth");

// Replaces the old /api/student/[name].js. That endpoint let anyone query
// any other student's record just by knowing (or guessing) their name.
// Now identity comes from the session, so this always returns the caller's
// own progress only.
module.exports = async (req, res) => {
  const session = await requireSession(req, res);
  if (!session) return;

  try {
    const student = await getStudent(session.email);
    res.status(200).json(student);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not load your progress" });
  }
};
