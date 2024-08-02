const express = require("express");
const { searchLeads } = require("../controllers/leadController");
const router = express.Router();

router.get("/" , searchLeads);

module.exports = router;