const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: "name is required" },
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
  type: { type: String, required: "type is required" },
  phone: { type: String },
  birth: { type: Date },
  profile_url: { type: String },
  document_url: { type: String },
  bio: { type: String },
  skills: { type: [String] },
  follows: { type: [String] },
  educations: [
    {
      school: { type: String },
      degree: { type: String },
      started_date: { type: String },
      ended_date: { type: String },
    },
  ],
  experiences: [
    {
      title: { type: String },
      company: { type: String },
      started_date: { type: String },
      ended_date: { type: String },
    },
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
