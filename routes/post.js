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
router.post('/like/:id', isAuth, postController.addLike);

// Dislike post
router.post('/dislike/:id', isAuth, postController.addDislike);

// Remove like
router.delete('/like/:id', isAuth, postController.removeLike);

// Remove dislike
router.delete('/dislike/:id', isAuth, postController.removeDislike);

module.exports = router;