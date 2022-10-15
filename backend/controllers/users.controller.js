const User = require("../models/users.model");

const getAllCompanies = async (req, res) => {
  const user = await User.find({ type: "Company" }).exec();
  res.json({ user: user });
};

module.exports = { getAllCompanies };
