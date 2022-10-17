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
  try {
    const user = await User.findById(req.user._id).exec();
    user.name = req.body.name ? req.body.name : user.name;
    user.phone = req.body.phone ? req.body.phone : user.phone;
    user.bio = req.body.bio ? req.body.bio : user.bio;
    user.skills = req.body.skills ? req.body.skills : user.skills;
    user.educations = req.body.educations
      ? req.body.educations
      : user.educations;
    user.experiences = req.body.experiences
      ? req.body.experiences
      : user.experiences;

    await user.save();
    res.status(200).json({ user: user, status: "success" });
  } catch (err) {
    return res.status(400).json({
      error: "Something went wrong",
    });
  }
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
