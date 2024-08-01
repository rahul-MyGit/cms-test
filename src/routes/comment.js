const express = require('express');
const { addComment } = require('../controllers/commentController');
const router = express.Router();

router.get('/', addComment);

module.exports = router;
