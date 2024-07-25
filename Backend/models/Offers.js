// models/Offers.js
const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    name: String,
    Plant: String,
    email: String,
    offer_id: String,
    skills: String,
    department: String,
    Boss: String,
    formation: String,
    experience: String,
    salary: String,
    negociation: String,
    time: String,
    entretien: String
});

module.exports = mongoose.model('Offers', OfferSchema);
