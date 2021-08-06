const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
const authController = require('../controllers/auth');

// Register new user
router.post('/signup', authController.signup);

// Login in user
router.post('/login', authController.login);

// Get logged in user
router.get('/user', isAuth, authController.fetchUser);

module.exports = router;