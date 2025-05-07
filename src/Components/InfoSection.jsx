import React, { useState } from 'react';
import './InfoSection.css';
import LoanImage from '../Images/Loan.webp';


const dropdownData = [
  {
    title: 'Loan Eligibility',
    content: 'You must be 21 years old with a stable income source and a good credit score.',
  },
  {
    title: 'Required Documents',
    content: 'ID proof, address proof, salary slips, and bank statements are mandatory.',
  },
  {
    title: 'Interest Rates',
    content: 'Interest rates vary from 7% to 14% depending on credit profile.',
  },
  {
    title: 'Repayment Options',
    content: 'Flexible monthly EMIs available for up to 60 months.',
  },
];

const InfoSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="info-section">
      <div className="info-image">
        <img src={LoanImage} alt="Car Loan Info" />
      </div>
      <div className="info-dropdowns">
        {dropdownData.map((item, index) => (
          <div key={index} className="dropdown-item">
            <div
              className="dropdown-header"
              onClick={() => toggleDropdown(index)}
            >
              {item.title}
            </div>
            {openIndex === index && (
              <div className="dropdown-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
