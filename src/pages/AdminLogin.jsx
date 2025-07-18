import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    

    try {
      console.log('Attempting Login');
      const response = await axios.post('https://wealthwiser.onrender.com/api/admin/login', {
        email,
        password,
      });

      console.log('Server response:');

      if (response.data.success && response.data.token) {
        console.log('Login successful, storing token');
        // Store JWT token
        localStorage.setItem('token', response.data.token);
        console.log('Token stored, redirecting to dashboard');
        // Redirect to dashboard
        navigate('/admin/dashboard');
      } else {
        console.log('Invalid response from server:', response.data);
        setError('Invalid response from server');
      }
    } catch (err) {
      console.error('Login error:', err);
      if (err.response && err.response.data) {
        console.log('Error response:', err.response.data);
        setError(err.response.data.message || 'Login failed');
      } else {
        console.log('Network or server error');
        setError('Server error. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h1>Welcome Back</h1>
          <p>Please sign in to your admin account</p>
        </div>

        {error && (
          <div className="admin-error-message" role="alert">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="admin-form-input"
              placeholder="admin@gmail.com"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-form-input"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="admin-login-button"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Default credentials: admin@gmail.com / admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 