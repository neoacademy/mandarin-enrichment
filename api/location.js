const { getStudent, setStudent } = require("../lib/redis");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }
  const { name, location } = req.body || {};
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "name is required" });
  }
  try {
    const student = await getStudent(name);
    student.location = location || student.location;
    student.updatedAt = Date.now();
    await setStudent(name, student);
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not update location" });
  }
};
