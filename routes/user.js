const express = require('express');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

const userController = require('../controllers/user');

// Like post
router.post('/like/:id', isAuth, userController.likePost);

// Dislike post
router.post('/dislike/:id', isAuth, userController.dislikePost);

// Unlike post
router.delete('/like/:id', isAuth);

// Un-dislike post
router.delete('/dislike/:id', isAuth);

module.exports = router;