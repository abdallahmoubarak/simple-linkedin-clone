const Offer = require("../models/offers.model");

const createJobOffer = async (req, res) => {
  const { company_id, title, description, requirments } = req.body;

  if (!company_id || !title || !description || !requirments)
    return res
      .status(401)
      .json({ status: "error", massage: "values required" });

  try {
    const offer = new Offer();
    offer.company_id = company_id;
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
  const offers = await Offer.find().exec();

  res.json(offers);
};

module.exports = { createJobOffer, getJobOffers };
