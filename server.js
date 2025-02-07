// server.js
require('dotenv').config(); // Load .env
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
