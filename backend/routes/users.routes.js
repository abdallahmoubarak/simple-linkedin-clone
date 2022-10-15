const { Router } = require("express");
const { getAllCompanies } = require("../controllers/users.controller");
const router = Router();

router.get("/", getAllCompanies);

module.exports = router;
