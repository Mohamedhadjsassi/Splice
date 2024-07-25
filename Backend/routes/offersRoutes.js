// routes/offersRoutes.js
const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offersController');

// Get all offers
router.get('/', offersController.getAllOffers);

// Add a new offer
router.post('/', offersController.addOffer);

module.exports = router;
