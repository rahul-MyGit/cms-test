const express = require("express");
const { createCourse, updateCourse, registerUser } = require("../controllers/courseController");
const router = express.Router();

router.post("/" , createCourse);
router.put("/:courseId" , updateCourse);
router.post("/:courseId/register", registerUser);

module.exports = router;
