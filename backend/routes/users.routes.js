const { Router } = require("express");
const {
  getUser,
  updateUser,
  followCompany,
  getCurrentUser,
  getApplicants,
} = require("../controllers/users.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = Router();

router.get("/current", authMiddleware, getCurrentUser);
router.get("/applicants/:id", authMiddleware, getApplicants);
router.get("/:id", authMiddleware, getUser);
router.put("/follow", authMiddleware, followCompany);
router.put("/", authMiddleware, updateUser);

module.exports = router;
