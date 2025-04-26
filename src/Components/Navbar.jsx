import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <>
    <div className="navbar">
      <h1>LOGO</h1>

    <div className="navitems">
    <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
    <Link to="/calculator" style={{ textDecoration: 'none' }}><span>Calculator</span></Link>
    <Link to="/about" style={{ textDecoration: 'none' }}><span>About</span></Link>
    <Link to="/contact" style={{ textDecoration: 'none' }}><span>Contact</span></Link>
    </div>

    <button className='contact-button'> Contact us </button>

  </div>
  </>
  
);
}

export default Navbar;
