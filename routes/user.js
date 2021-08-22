const express = require('express');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

const userController = require('../controllers/user');

// Like post
router.post('/like/:id', isAuth, userController.likePost);

// Remove like from post
router.delete('/like/:id', isAuth, userController.removeLike);

// Get liked posts
router.get('/like', isAuth, userController.getLikedPosts);

module.exports = router;