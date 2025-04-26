import React from 'react';
import './Whyus.css';

const features = [
  {
    title: "Fast Approvals",
    description: "We provide loan approvals within 24 hours with minimal documentation.",
  },
  {
    title: "Flexible Repayment",
    description: "Tailor your loan terms to suit your needs and pay at your own pace.",
  },
  {
    title: "Low Interest Rates",
    description: "Our competitive rates help you save more while getting what you need.",
  },
  {
    title: "24/7 Support",
    description: "Got questions? Our experts are always just a call or chat away.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <h2>Why You Should Choose Us</h2>
      <div className="why-cards">
        {features.map((item, index) => (
          <div key={index} className="why-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
