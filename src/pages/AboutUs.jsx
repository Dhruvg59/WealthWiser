import React from 'react';
import './AboutUs.css';
import Image1 from "../Images/Propertyloan.jpg";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-left">
          <h1>About Wealthwise</h1>
          <p>
            At <strong>Wealthwise</strong>, we simplify the complex world of lending by offering smart,
            accessible, and transparent financial solutions. Whether you're looking for a personal loan,
            business financing, or anything in between, we help you find the perfect path to financial empowerment.
          </p>

          <h2>Our Mission</h2>
          <ul>
            <li>Empower users with easy access to financial tools and insights.</li>
            <li>Provide tailored loan options that meet real-life needs.</li>
            <li>Maintain transparency and build long-lasting trust.</li>
            <li>Leverage smart technology for faster, more accurate decisions.</li>
            <li>Promote financial independence and literacy.</li>
          </ul>

          <h2>Our Vision</h2>
          <p>
            To be the most trusted digital lending partner in India, helping individuals and businesses
            thrive financially through innovation, integrity, and personalized service.
          </p>
        </div>

        <div className="about-right">
          <img
            src={Image1}// replace with your actual illustration/image path
            alt="Wealthwise Illustration"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
