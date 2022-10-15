const { Router } = require("express");
const { signup } = require("../controllers/auth.controller");
const router = Router();

router.post("/signup", signup);

router.post("/signin", (req, res) => {
  res.send("I am signin route");
});

module.exports = router;
