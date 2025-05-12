import React from 'react';
import './FloatingLogo.css';
import logo from '../Images/logo-transparent-png.png';

const FloatingLogo = () => {
  return (
    <div className="floating-logo-container">
      <img src={logo} alt="Wealthwise" className="floating-logo" />
    </div>
  );
};

export default FloatingLogo; 