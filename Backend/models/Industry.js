// models/Industry.js
const mongoose = require('mongoose');

const IndustrySchema = new mongoose.Schema({
    plant: String,
    image: String,
    position: String,
    products: String,
    operators_numbers: String,
    parcours: String,
    defi: String,
    RH: String,
    id: String
});

module.exports = mongoose.model('Industry', IndustrySchema);
