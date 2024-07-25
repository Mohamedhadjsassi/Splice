// controllers/newsController.js
const News = require('../models/News');

exports.getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.addNews = async (req, res) => {
    try {
        const newNews = new News(req.body);
        const news = await newNews.save();
        res.json(news);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
