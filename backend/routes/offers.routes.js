const { Router } = require("express");
const { createJobOffer } = require("../controllers/offers.controller");
const router = Router();

router.post("/", createJobOffer);

module.exports = router;
