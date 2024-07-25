// controllers/offersController.js
const Offers = require('../models/Offers');

// Get all offers
exports.getAllOffers = async (req, res) => {
    try {
        const offers = await Offers.find();
        res.json(offers);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Add a new offer
exports.addOffer = async (req, res) => {
    try {
        const newOffer = new Offers(req.body);
        const offer = await newOffer.save();
        res.json(offer);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
