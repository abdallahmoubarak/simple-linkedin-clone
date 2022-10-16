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
  try {
    const user = await User.findById(req.user._id).exec();

    if (user?.follows?.includes(req.body.id)) {
      user.follows?.splice(user.follows.indexOf(req.body.id));
    } else {
      user.follows = [...user.follows, req.body.id];
    }

    user.save();
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      user: req.user,
    });
  } catch (err) {
    return res.status(400).json({
      error: "User not found",
    });
  }
};

module.exports = { getUser, updateUser, followCompany, getCurrentUser };
