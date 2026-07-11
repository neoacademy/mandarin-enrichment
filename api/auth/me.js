const { getSessionFromReq } = require("../../lib/auth");

module.exports = async (req, res) => {
  const session = await getSessionFromReq(req);
  if (!session) {
    return res.status(200).json({ authenticated: false });
  }
  res.status(200).json({ authenticated: true, ...session });
};
