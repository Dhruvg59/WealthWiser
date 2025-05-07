import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; // Make sure you create the Footer component
import './ContactUs.css'; // For styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    message: '',
    type:"contact",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData)   
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
         
      const data = await response.json();
      console.log('Form submitted successfully:', data);
      alert('Form submitted successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        amount: '',
        message: ''
        
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <>
      
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
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
            </div>
            <div className="input-group">
              <input 
                type="text" 
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
            </div>
            <div className="input-group">
              <input 
                type="number" 
                name="amount"
                placeholder="Loan Amount" 
                value={formData.amount}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <textarea 
                name="message"
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
