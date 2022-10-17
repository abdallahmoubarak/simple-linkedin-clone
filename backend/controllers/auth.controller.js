const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password, type } = req.body;

  if (!name || !email || !password || !type)
    return res
      .status(401)
      .json({ status: "error", massage: "values required" });

  try {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = await bcrypt.hash(password, 10);
    user.type = type;

    const token = generateToken(user);
    await user.save();

    res.json({
      status: "success",
      user,
      authorization: { token, type: "bearer" },
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(404).json({ message: "Invalid Credentials" });

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(404).json({ message: "Invalid Credentials" });

  const token = generateToken(user);
  res.json({
    status: "success",
    user,
    authorization: { token, type: "bearer" },
  });
};

module.exports = { signin, signup };

const generateToken = ({ email, name, type }) =>
  jwt.sign({ email, name, type }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
