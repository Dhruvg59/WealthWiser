import React, { useState } from 'react';
 // Make sure you create the Footer component
import './ContactUs.css'; // For styling
import ContactImg from "../Images/Contactus.jpg"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    message: '',
    type: "contact"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const token = localStorage.getItem('token');

      console.log('Submitting form data:', formData);
      
      const response = await fetch('https://wealthwiser.onrender.com/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSuccess(true);
      console.log('Form submitted successfully:', data);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        amount: '',
        message: '',
        type: "contact"
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || 'Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
      
      <div className="contact-wrapper">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-us-container">
          <div className="contact-left">
            {error && (
              <div className="admin-error-message" role="alert">
                <p>{error}</p>
              </div>
            )}
            
            {success && (
              <div className="admin-success-message" role="alert">
                <p>Form submitted successfully! We'll get back to you soon.</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="loanType"
                placeholder="Loan Type"
                value={formData.loanType}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="amount"
                placeholder="Loan Amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Enter City"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="admin-loading-spinner"></div>
                    Submitting...
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
          <div className="contact-right">
            <img src={ContactImg} alt="Contact us" className="contact-image" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ContactUs;
