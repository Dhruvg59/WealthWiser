
import React, { useState } from 'react';
import './InfoSection.css';
import LoanImage from '../Images/Loan.webp';

const dropdownData = [
  {
    title: 'Apply',
    content: 'At this stage, you will need to fill in your details on the ‘Apply Now’ page and we will get in touch with you at the earliest',
  },
  {
    title: 'Check Eligibilty',
    content: 'Our experts will analyse your loan requirement over the WhatsApp Chat. We will need the below information to recommend the most suitable loan product with the lowest interest rate:',
    points: [
      'Mode of employment, years of work experience, Company you work for',
      'Your current income',
      'City of Employment & Current obligations (Any existing EMI’s being paid, credit card outstanding)',
    ],
  },
  {
    title: 'Document Collection',
    content: 'Our process is entirely digital, ensuring convenience and efficiency. Simply email us the following documents, and our team will take care of the rest:',
    points: [
      'KYC documents (ID & Residence proof)',
      'Income documents',
    ],
  },
  {
    title: 'Loan Processing',
    content: 'We will assist you in processing the loan application online and ensure compliance with all bank formalities seamlessly.',
  },
  {
    title: 'Loan Approval',
    content: 'The bank will approve your loan application post submission and verification of your documents',
  },
  {
    title: 'Disbursement',
    content: 'Amount will be credited to your bank account after submission of post-sanction documents.',
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
              <div className="dropdown-content">
                <p>{item.content}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;

