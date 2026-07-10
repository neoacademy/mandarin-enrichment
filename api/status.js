const { getAllStudents } = require("../lib/redis");

module.exports = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.status(200).json(students);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not load class status" });
  }
};
