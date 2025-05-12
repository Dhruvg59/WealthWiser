import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import logo from '../Images/logo-png 2.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Wealthwise Logo" className="logo" />
      </Link>

      <div className="navitems">
        <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
        <Link to="/calculator" style={{ textDecoration: 'none' }}><span>Calculator</span></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><span>About</span></Link>
        <Link to="/service" style={{ textDecoration: 'none' }}><span>Services</span></Link>
      </div>

      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <button className='contact-button'>Contact Us</button>
      </Link>
    </div>
  );
}

export default Navbar;
