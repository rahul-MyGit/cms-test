const express = require("express");
const { searchLeads, updateLead, addRemark } = require("../controllers/leadController");
const router = express.Router();

router.get("/" , searchLeads);
router.put("/:leadId", updateLead);
router.post("/:leadId/comments", addRemark)

module.exports = router;