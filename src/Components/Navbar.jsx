// import { Link } from 'react-router-dom';
// import React from 'react';
// import './Navbar.css';
// import logo from '../Images/logo-png 2.png';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {

  
//   return (
//     <div className="navbar">
//       <Link to="/" className="logo-container">
//         <img src={logo} alt="Wealthwise Logo" className="logo" />
//       </Link>

//       <div className="navitems">
//         <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
//         <Link to="/calculator" style={{ textDecoration: 'none' }}><span>Calculator</span></Link>
//         <Link to="/about" style={{ textDecoration: 'none' }}><span>About</span></Link>
//         <Link to="/service" style={{ textDecoration: 'none' }}><span>Services</span></Link>
//       </div>

//       <Link to="/contact" style={{ textDecoration: 'none' }}>
//         <button className='contact-button'>Contact Us</button>
//       </Link>

      
//     </div>



//   );
// }

// export default Navbar;

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo-png 2.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo-container" onClick={closeMenu}>
        <img src={logo} alt="Wealthwise Logo" className="logo" />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Items */}
      <div className={`navitems ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <span>Home</span>
        </Link>
        <Link to="/calculator" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <span>Calculator</span>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <span>About</span>
        </Link>
        <Link to="/service" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <span>Services</span>
        </Link>
      </div>

      <Link to="/contact" style={{ textDecoration: 'none' }} onClick={closeMenu}>
        <button className="contact-button">Contact Us</button>
      </Link>
    </div>
  );
};

export default Navbar;

