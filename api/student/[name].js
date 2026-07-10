const { getStudent } = require("../../lib/redis");

module.exports = async (req, res) => {
  const { name } = req.query;
  try {
    const student = await getStudent(name);
    res.status(200).json(student);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not load student record" });
  }
};
