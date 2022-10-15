const { Router } = require("express");
const router = Router();

router.post("/signup", (req, res) => {
  res.send("I am signup route");
});

router.post("/signin", (req, res) => {
  res.send("I am signin route");
});

module.exports = router;
