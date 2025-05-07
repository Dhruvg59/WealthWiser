// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// const FooterWrapper = styled.footer`
//   background-color: #0d0d0d;
//   color: white;
//   padding: 3rem 2rem;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   gap: 2rem;
// `;

// const Column = styled.div`
//   flex: 1;
//   min-width: 250px;
// `;

// const Logo = styled.h2`
//   color: #fff;
//   margin-bottom: 1rem;
// `;

// const Link = styled.a`
//   display: block;
//   color: #ccc;
//   text-decoration: none;
//   margin-bottom: 0.5rem;

//   &:hover {
//     color: #fff;
//   }
// `;

// const Socials = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;

//   svg {
//     color: #ccc;
//     font-size: 1.5rem;

//     &:hover {
//       color: #fff;
//     }
//   }
// `;

// const NewsletterInput = styled.input`
//   padding: 0.6rem;
//   border: none;
//   border-radius: 5px 0 0 5px;
//   outline: none;
//   width: 70%;
// `;

// const SubscribeButton = styled.button`
//   padding: 0.6rem 1rem;
//   background: #ff6600;
//   color: white;
//   border: none;
//   border-radius: 0 5px 5px 0;
//   cursor: pointer;

//   &:hover {
//     background: #e65500;
//   }
// `;

// const NewsletterWrapper = styled.div`
//   display: flex;
//   margin-top: 1rem;
// `;

// const FooterBottom = styled.div`
//   margin-top: 3rem;
//   border-top: 1px solid #333;
//   padding-top: 1.5rem;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
// `;

// const ToggleTheme = styled.button`
//   background: none;
//   border: none;
//   color: #ccc;
//   font-size: 1.3rem;
//   cursor: pointer;

//   &:hover {
//     color: #fff;
//   }
// `;

// const LanguageSelect = styled.select`
//   background: #1a1a1a;
//   color: #ccc;
//   border: none;
//   padding: 0.5rem;
//   border-radius: 5px;

//   &:hover {
//     color: #fff;
//   }
// `;

// const Footer = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     // Optional: apply theme logic to document.body here
//   };

//   return (
//     <FooterWrapper>
//       <Column>
//         <Logo>MyFinance</Logo>
//         <p>Empowering your financial future with smart loans and fast approvals.</p>
//         <Socials>
//           <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//           <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//           <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
//           <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a>
//         <a href="https://www.instagram.com/dhruvg59" target="_blank" rel="noopener noreferrer">Instagram</a>
//         <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//         </Socials>
//       </Column>

//       <Column>
//         <h4>Quick Links</h4>
//         <Link href="#">Home</Link>
//         <Link href="#">About Us</Link>
//         <Link href="#">Loans</Link>
//         <Link href="#">Contact</Link>
//       </Column>

//       <Column>
//         <h4>Newsletter</h4>
//         <p>Stay updated with our latest offers and tips.</p>
//         <NewsletterWrapper>
//           <NewsletterInput placeholder="Your email" />
//           <SubscribeButton>Subscribe</SubscribeButton>
//         </NewsletterWrapper>
//       </Column>

//       <FooterBottom>
//         <div>
//           <ToggleTheme onClick={toggleTheme}>
//             <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </ToggleTheme>
//         </div>
//         <div>
//           <LanguageSelect>
//             <option>English</option>
//             <option>Hindi</option>
//             <option>Spanish</option>
//           </LanguageSelect>
//         </div>
//       </FooterBottom>
//     </FooterWrapper>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
        <Logo>MyFinance</Logo>
        <Tagline>Empowering your financial future with smart loans and fast approvals.</Tagline>
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
      </Column>

      <Column>
        <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
        <Link href="#">Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Loans</Link>
        <Link href="#">Contact</Link>
      </Column>

      <FooterBottom>
        <ToggleTheme onClick={toggleTheme}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {darkMode ? 'Light Mode' : 'Dark Mode'}
        </ToggleTheme>
        <LanguageSelect>
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </LanguageSelect>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
