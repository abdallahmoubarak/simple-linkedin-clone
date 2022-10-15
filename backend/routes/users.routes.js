const { Router } = require("express");
const {
  getUser,
  updateUser,
  followCompany,
  getCurrentUser,
} = require("../controllers/users.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = Router();

router.get("/current", authMiddleware, getCurrentUser);
router.get("/:id", authMiddleware, getUser);
router.put("/", updateUser);
router.put("/follow", followCompany);

module.exports = router;
