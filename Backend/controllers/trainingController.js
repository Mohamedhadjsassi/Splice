// controllers/trainingController.js
const Training = require('../models/Training');

// Get all training data
exports.getAllTraining = async (req, res) => {
    try {
        const training = await Training.find();
        res.json(training);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Add new training data
exports.addTraining = async (req, res) => {
    try {
        const newTraining = new Training(req.body);
        const training = await newTraining.save();
        res.json(training);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
