// server.js
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/industry', require('./routes/industryRoutes'));
app.use('/api/offers', require('./routes/offersRoutes'));
app.use('/api/training', require('./routes/trainingRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
