const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');




const SECRET_KEY = process.env.JWT_SECRET;

// ✅ Use .env variables instead
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;



router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log('Login attempt received:',);

    // Check if environment variables are set
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !SECRET_KEY) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        success: false, 
        message: 'Server configuration error' 
      });
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
     
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
      console.log(' successfully');
      
      return res.json({ success: true, token });
    } else {
      console.log('Login failed - Invalid credentials');
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

// Verify admin authentication
router.get('/verify', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ authenticated: false });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return res.json({ authenticated: true, email: decoded.email });
  } catch (err) {
    return res.status(401).json({ authenticated: false });
  }
});


// Change password
router.post('/change-password', async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  
  if (oldPassword === ADMIN_PASSWORD) {
    // In a real application, you would update the password in the database
    res.json({ message: 'Password updated successfully' });
  } else {
    res.status(403).json({ message: 'Old password incorrect' });
  }
});

module.exports = router;
