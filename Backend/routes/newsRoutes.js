// routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.get('/', newsController.getAllNews);
router.post('/', newsController.addNews);

module.exports = router;
