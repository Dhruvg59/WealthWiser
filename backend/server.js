require('dotenv').config();


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

// Middleware
app.use(cors({
  origin: "https://wealth-wiser.vercel.app", 
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/finance-website')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  


// Import routes
const formRoutes = require('./routes/Form');
const adminRoutes = require('./routes/Admin');

// Use routes
app.use('/api/form', formRoutes);
app.use('/api/admin', adminRoutes);

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
