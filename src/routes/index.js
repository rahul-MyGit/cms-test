const express = require('express');
const router = express.Router();
const commentRoutes = require("./comment");

router.use("/comment" , commentRoutes);

module.exports = router;
