// models/Training.js
const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
    name: String,
    link: String
});

const TrainingSchema = new mongoose.Schema({
    field: String,
    Skill: String,
    Training_id: String,
    parts: [PartSchema],
    resumy: String
});

module.exports = mongoose.model('Training', TrainingSchema);
