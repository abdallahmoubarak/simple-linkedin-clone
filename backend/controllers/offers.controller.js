const Offer = require("../models/offers.model");
const User = require("../models/users.model");

const createJobOffer = async (req, res) => {
  const { title, description, requirments } = req.body;

  if (!title || !description || !requirments)
    return res
      .status(401)
      .json({ status: "error", massage: "values required" });

  const company = await User.findById(req?.user?._id).exec();
  if (!company)
    return res
      .status(401)
      .json({ status: "error", massage: "company dosent exist" });

  try {
    const offer = new Offer();
    offer.company_id = company.id;
    offer.company_name = company.name;
    offer.title = title;
    offer.description = description;
    offer.requirments = JSON.parse(requirments);

    await offer.save();

    res.json({
      status: "success",
      offer,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getJobOffers = async (req, res) => {
  try {
    const offers = await Offer.find().exec();

    res.json({
      status: "success",
      offers,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getNotifications = async (req, res) => {
  try {
    const ids = req.user.follows;
    const offers = await Offer.find().where("_id").in(ids).exec();

    res.json({
      status: "success",
      offers,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getOwnOffers = async (req, res) => {
  try {
    const offers = await Offer.find({ company_id: req.user._id }).exec();
    res.json({
      status: "success",
      offers,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  createJobOffer,
  getJobOffers,
  getNotifications,
  getOwnOffers,
};
