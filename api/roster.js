const roster = require("../roster.json");

module.exports = (req, res) => {
  res.status(200).json(roster);
};
