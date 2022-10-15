const { Router } = require("express");
const {
  createJobOffer,
  getJobOffers,
} = require("../controllers/offers.controller");
const authMiddleware = require("../middleware/auth.middleware");
const companyMiddleware = require("../middleware/company.middleware");

const router = Router();

router.post("/", companyMiddleware, createJobOffer);
router.get("/", authMiddleware, getJobOffers);

module.exports = router;
