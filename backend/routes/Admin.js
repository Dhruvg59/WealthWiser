const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');




const SECRET_KEY =  process.env.JWT_SECRET;

// ✅ Use .env variables instead
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


// Admin login route
// router.post('/login', (req, res) => {
//   console.log('Login attempt received:', req.body);
//   const { email, password } = req.body;

//   if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//     console.log('Login successful');
//     res.json({ success: true });
//   } else {
//     console.log('Login failed - Invalid credentials');
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });
router.post('/login', (req, res) => {
  const { email, password } = req.body;


  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
   

    return res.json({ success: true, token });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });

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
