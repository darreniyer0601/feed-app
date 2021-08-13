const express = require('express');

const router = express.Router();

const isAuth = require('../middleware/isAuth');
const commentController = require('../controllers/comment');

// Add comment to post
router.post('/:postId', isAuth, commentController.addComment);

// Get comments for post
router.get('/:postId', isAuth, commentController.getComments);

module.exports = router;