const express = require('express');

const router = express.Router();

const isAuth = require('../middleware/isAuth');
const postController = require('../controllers/post');

// Add post
router.post('/', isAuth, postController.addPost);

// Update post
router.put('/:id', isAuth, postController.updatePost);

// Delete post
router.delete('/:id', isAuth, postController.deletePost);

// Get all posts
router.get('/', isAuth, postController.getPosts);

// Get specific post
router.get('/:id', isAuth, postController.getOnePost);

// Like post
router.put('/like/:id', isAuth, postController.addLike);

// Dislike post
router.put('/dislike/:id', isAuth, postController.addDislike);

module.exports = router;