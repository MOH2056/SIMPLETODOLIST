const express = require('express');
const auth = require('../middlewares/auth'); // Middleware for authentication
const todoController = require('../controllers/todolistController'); // Import the controller
const router = express.Router();

// Use the controller for the POST request
router.post('/api', auth, todoController.createTodo);

module.exports = router;
