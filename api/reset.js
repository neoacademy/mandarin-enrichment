const { resetAll } = require("../lib/redis");
const { requireTeacher } = require("../lib/auth");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const session = await requireTeacher(req, res);
  if (!session) return;

  try {
    await resetAll();
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not reset class" });
  }
};
