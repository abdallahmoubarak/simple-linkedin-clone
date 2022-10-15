const User = require("../models/users.model");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params?.id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({
      error: "User not found",
    });
  }
};

const updateUser = async (req, res) => {
  res.json({ message: "wait for it" });
};
const followCompany = async (req, res) => {
  res.json({ message: "wait for it" });
};

module.exports = { getUser, updateUser, followCompany };
