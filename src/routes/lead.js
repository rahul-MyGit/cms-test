const express = require("express");
const { allLeads, updateLead, addRemark } = require("../controllers/leadController");
const router = express.Router();

router.get("/" , allLeads);
router.put("/:leadId", updateLead);
router.post("/:leadId/comments", addRemark)

module.exports = router;