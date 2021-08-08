const express = require('express');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

const userController = require('../controllers/user');

// Like post
router.post('/like/:id', isAuth, userController.likePost);

// Dislike post
router.post('/dislike/:id', isAuth, userController.dislikePost);

// Remove like from post
router.delete('/like/:id', isAuth, userController.removeLike);

// Remove dislike from post
router.delete('/dislike/:id', isAuth, userController.removeDislike);

module.exports = router;