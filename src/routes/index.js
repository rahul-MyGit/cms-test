const express = require('express');
const router = express.Router();

const commentRoutes = require("./comment");
const courseRoutes = require("./course");
const leadRoutes = require("./lead")

router.use("/comment" , commentRoutes);
router.use("/courses", courseRoutes);
router.use("/leads", leadRoutes);

module.exports = router;
