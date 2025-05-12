

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../Images/logo-svg 2.svg';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #111, #1c1c1c);
  color: #e0e0e0;
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
`;
const SocialColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h4 {
    color: #fff;
  }
`;


const Logo = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.5;
`;

const Link = styled.a`
  display: block;
  color: #bbb;
  text-decoration: none;
  margin: 0.4rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: #bbb;
    font-size: 1.6rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: #ff6f00;
      transform: scale(1.2);
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  margin-top: 3rem;
  border-top: 1px solid #333;
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ToggleTheme = styled.button`
  background: none;
  border: none;
  color: #bbb;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6f00;
  }
`;

const LanguageSelect = styled.select`
  background: #222;
  color: #bbb;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  font-size: 0.95rem;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

const Footer = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <FooterWrapper>
  <Column>
    <Logo>
      <img src={logo1} alt="Wealthwise Logo" className="logo" style={{ background: 'transparent', width: '150px' }} />
    </Logo>
    <Tagline>
      Empowering your financial future with smart loans and fast approvals.
    </Tagline>
  </Column>

  <Column>
    <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
    <Link href="#">Home</Link>
    <Link href="#">About Us</Link>
    <Link href="#">Loans</Link>
    <Link href="#">Contact</Link>
  </Column>

  <SocialColumn>
    <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
    <Socials>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/dhruvg59" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </Socials>
  </SocialColumn>
</FooterWrapper>

  );
};

export default Footer;
