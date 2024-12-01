const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB with error handling
connectDB().catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process if the connection fails
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start server with error handling
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
    process.exit(1); // Exit the process if the server fails to start
});
