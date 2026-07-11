const { getAllStudents } = require("../lib/redis");
const { requireTeacher } = require("../lib/auth");

module.exports = async (req, res) => {
  const session = await requireTeacher(req, res);
  if (!session) return;

  try {
    const students = await getAllStudents();
    res.status(200).json(students);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not load class status" });
  }
};
