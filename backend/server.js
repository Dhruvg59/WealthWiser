const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from mongo.env
dotenv.config({ path: './mongo.env' });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit if MongoDB connection fails
});

// Define Schema
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  loanType: String,
  amount: Number,
  message: String,
  type:String,
  createdAt: { type: Date, default: Date.now }
});

const FormData = mongoose.model('FormData', formDataSchema);

// Routes
app.post('/api/form', async (req, res) => {
  try {
    console.log('Received form data:', req.body);
    const formData = new FormData(req.body);
    const savedData = await formData.save();
    console.log('Saved form data:', savedData);
    res.status(201).json({ message: 'Form submitted successfully', data: savedData });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

app.get('/api/form', async (req, res) => {
  try {
    const forms = await FormData.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching forms', error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 