import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; // Make sure you create the Footer component
import './ContactUs.css'; // For styling

const ContactUs = () => {
  return (
    <>
      

      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default ContactUs;
