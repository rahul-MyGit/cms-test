const express = require('express');
const router = express.Router();

const courseRoutes = require("./course");
const leadRoutes = require("./lead")

router.use("/courses", courseRoutes);
router.use("/leads", leadRoutes);

module.exports = router;
