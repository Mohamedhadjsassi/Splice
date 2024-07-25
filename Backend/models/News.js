// models/News.js
const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    id: String
});

module.exports = mongoose.model('News', NewsSchema);
