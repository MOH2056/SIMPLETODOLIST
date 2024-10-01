const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Use the exported controller functions
router.post('/register', userController.registerUser);
router.post('/login', userController.login);

module.exports = router;
