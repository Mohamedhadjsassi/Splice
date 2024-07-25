// routes/trainingRoutes.js
const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');

// Get all training data
router.get('/', trainingController.getAllTraining);

// Add new training data
router.post('/', trainingController.addTraining);

module.exports = router;
