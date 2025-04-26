import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './LoanHighlight.css';
import { useNavigate } from 'react-router-dom';

const LoanHighlights = () => {
  const navigate = useNavigate();
  const boxItems = [
    {
      title: 'Fast Approval',
      points: ['Get decisions in minutes', 'Same-day funding available'],
      Path: '/card-loan',
    },
    {
      title: 'Up to $10M',
      points: ['High loan limits', 'Custom solutions'],
      Path: '/card-loan',
    },
    {
      title: 'Flexible Terms',
      points: ['3-60 month terms', 'Early repayment options'],
    },
    {
      title: 'Trusted Lenders',
      points: ['Verified partners', 'Nationwide coverage'],
    },
    {
      title: 'No Hidden Fees',
      points: ['Transparent pricing', 'No early penalties'],
    },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className="loan-section">
      <div className="loan-container">
        <p className="loan-subtitle">What we are offering</p>
         <h2 className="loan-title">
            <span className="word-why">Why </span>
            <span className="word-choose">Choose </span>
            <span className="word-us">Us</span>
         </h2>
        <div className="loan-grid">
          {boxItems.map((item, index) => (
            <div 
              key={index} 
              className="loan-box"
              onClick={() => handleCardClick(item.Path)}
              style={{ cursor: item.Path ? 'pointer' : 'default' }}
            >
              <h3 className="loan-box-title">{item.title}</h3>
              <ul className="loan-points">
                {item.points.map((point, i) => (
                  <li key={i} className="loan-point">• {point}</li>
                ))}
              </ul>
              {item.Path && (
                <div className="loan-arrow">
                  <button onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.Path);
                  }}>
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="loan-btn-container">
          <button className="loan-button" onClick={() => navigate('/card-loan')}>
            Explore More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoanHighlights;
