import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './LoanHighlight.css';
import { useNavigate } from 'react-router-dom';
import image1 from '../Images/Working -1.avif';
import image2 from '../Images/working-2.avif';
import image3 from '../Images/working-3.avif';
import image4 from '../Images/working-4.avif';
import image5 from '../Images/working-5.avif';
import image6 from '../Images/working-6.jpg';
import image7 from '../Images/working-7.avif';

const LoanHighlights = () => {
  const navigate = useNavigate();
  const boxItems = [
    {
      title: 'Overdraft For Salaried',
      points: ['Get decisions in minutes', 'Same-day funding available'],
      Path: '/card-loan',
      image: image1,
    },
    {
      title: 'Overdraft For Self-Employed',
      points: ['High loan limits', 'Custom solutions'],
      Path: '/selfemployed-loan',
      image: image2,
    },
    {
      title: ' Loan Against Property',
      points: ['3-60 month terms', 'Early repayment options'],
      Path: '/card-loan',
      image: image3,
    },
    {
      title: 'Personal Loan',
      points: ['Verified partners', 'Nationwide coverage'],
      Path: '/card-loan',
      image: image4,
    },
    {
      title: 'Buisness Loan',
      points: ['Transparent pricing', 'No early penalties'],
      Path: '/card-loan',
      image: image5,
    },
    {
      title: 'MSME Loan',
      points: ['Transparent pricing', 'No early penalties'],
      Path: '/card-loan',
      image: image6,
    },
     {
      title: 'Home Loan',
      points: ['Transparent pricing', 'No early penalties'],
      Path: '/card-loan',
      image: image3,
    },
    {
      title: 'Car Loan',
      points: ['Transparent pricing', 'No early penalties'],
      Path: '/card-loan',
      image: image7,
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
              {item.image && (
                <div className='loan-box-img'>
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <div className='loan-box-content'>
                <h3 className="loan-box-title">{item.title}</h3>
                <ul className="loan-points">
                  {item.points.map((point, i) => (
                    <li key={i} className="loan-point">• {point}</li>
                  ))}
                </ul>
              </div>
              {item.Path && (
                <div className='loan-box-button'>
                  <button>Apply Now <FaArrowRight /></button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanHighlights;
