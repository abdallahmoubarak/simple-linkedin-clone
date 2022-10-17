const { Router } = require("express");
const {
  getUser,
  updateUser,
  followCompany,
  getCurrentUser,
  uploadImg,
} = require("../controllers/users.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = Router();

router.get("/current", authMiddleware, getCurrentUser);
router.get("/:id", authMiddleware, getUser);
router.put("/follow", authMiddleware, followCompany);
router.put("/", authMiddleware, updateUser);
router.post("/", authMiddleware, uploadImg);

module.exports = router;
