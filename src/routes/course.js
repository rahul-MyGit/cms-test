const express = require("express");
const { createCourse, updateCourse } = require("../controllers/courseController");
const router = express.Router();

router.post("/" , createCourse);
router.put("/:courseId" , updateCourse);

module.exports = router;
