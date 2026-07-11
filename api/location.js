const { getStudent, setStudent } = require("../lib/redis");
const { requireSession } = require("../lib/auth");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const session = await requireSession(req, res);
  if (!session) return;

  const { location } = req.body || {};
  try {
    const email = session.email;
    const student = await getStudent(email);
    student.name = session.name;
    student.location = location || student.location;
    student.updatedAt = Date.now();
    await setStudent(email, student);
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not update location" });
  }
};
