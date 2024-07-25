// routes/industryRoutes.js
const express = require('express');
const router = express.Router();
const industryController = require('../controllers/industryController');

// Get all industries
router.get('/', industryController.getAllIndustries);

// Add a new industry
router.post('/', industryController.addIndustry);

module.exports = router;
