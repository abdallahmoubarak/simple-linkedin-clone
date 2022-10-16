const { Router } = require("express");
const {
  createJobOffer,
  getJobOffers,
  getNotifications,
  getOwnOffers,
} = require("../controllers/offers.controller");
const authMiddleware = require("../middleware/auth.middleware");
const companyMiddleware = require("../middleware/company.middleware");

const router = Router();

router.post("/", companyMiddleware, createJobOffer);
router.get("/notifications", authMiddleware, getNotifications);
router.get("/own", authMiddleware, getOwnOffers);
router.get("/", authMiddleware, getJobOffers);

module.exports = router;
