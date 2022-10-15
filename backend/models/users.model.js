const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "email is required",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "password is required",
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
