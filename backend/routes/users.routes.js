const { Router } = require("express");
const {
  getUser,
  updateUser,
  followCompany,
} = require("../controllers/users.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = Router();

router.get("/:id", authMiddleware, getUser);
router.put("/", updateUser);
router.put("/follow", followCompany);

module.exports = router;
