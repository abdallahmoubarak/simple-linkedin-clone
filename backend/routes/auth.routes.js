const { Router } = require("express");
const { signin, signup } = require("../controllers/auth.controller");
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
