const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  company_id: { type: String },
  company_name: { type: String },
  title: { type: String },
  description: { type: String },
  requirments: { type: [String] },
  applicants: { type: [String] },
  open: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
