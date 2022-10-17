const { Router } = require("express");
const {
  createJobOffer,
  getJobOffers,
  getNotifications,
  getOwnOffers,
  applyOffer,
} = require("../controllers/offers.controller");
const authMiddleware = require("../middleware/auth.middleware");
const companyMiddleware = require("../middleware/company.middleware");

const router = Router();

router.post("/", companyMiddleware, createJobOffer);
router.put("/", authMiddleware, applyOffer);
router.get("/notifications", authMiddleware, getNotifications);
router.get("/own", authMiddleware, getOwnOffers);
router.get("/", authMiddleware, getJobOffers);

module.exports = router;
