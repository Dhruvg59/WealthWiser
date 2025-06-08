const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');
const verifyToken = require('../middleware/verifyToken');


// Public route to submit form
router.post('/', async (req, res) => {
  try {
    console.log('Received form submission:', req.body);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'loanType', 'amount', 'message'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        missingFields
      });
    }

    const formData = new FormData(req.body);
    const savedData = await formData.save();
    console.log('Form saved successfully:', savedData);
    
    res.status(201).json({
      message: 'Form submitted successfully',
      data: savedData
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({
      message: 'Error submitting form',
      error: error.message
    });
  }
});

// Get all submissions
// router.get('/all', async (req, res) => {
//   try {
//     const forms = await FormData.find().sort({ createdAt: -1 });
//     res.json(forms);
//   } catch (error) {
//     console.error('Error fetching forms:', error);
//     res.status(500).json({
//       message: 'Error fetching forms',
//       error: error.message
//     });
//   }
// });
router.get('/all', verifyToken, async (req, res) => {
  try {
    console.log('Fetching all form submissions');
    const submissions = await FormData.find().sort({ createdAt: -1 });
    console.log(`Found ${submissions.length} submissions`);
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ 
      message: 'Error fetching submissions',
      error: error.message 
    });
  }
});


// Delete a submission
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await FormData.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error('Error deleting form:', error);
    res.status(500).json({
      message: 'Delete failed',
      error: error.message
    });
  }
});

module.exports = router;
