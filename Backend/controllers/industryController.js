// controllers/industryController.js
const Industry = require('../models/Industry');

// Get all industries
exports.getAllIndustries = async (req, res) => {
    try {
        const industries = await Industry.find();
        res.json(industries);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Add a new industry
exports.addIndustry = async (req, res) => {
    try {
        const newIndustry = new Industry(req.body);
        const industry = await newIndustry.save();
        res.json(industry);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
