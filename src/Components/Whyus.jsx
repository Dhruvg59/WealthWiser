import React from 'react';
import './Whyus.css';
import image1 from '../Images/Working -1.avif';
import image2 from '../Images/working-2.avif';
import { FaArrowRight } from 'react-icons/fa';
import { CiBank } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import { FaFileSignature } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";



const features = [
  {
    title: "Fast Approvals",
    description: "We provide loan approvals within 24 hours with minimal documentation.",
    image: image1,
    icon: <CiBank />,
  },
  {
    title: "Flexible Repayment",
    description: "Tailor your loan terms to suit your needs and pay at your own pace.",
    image: image2,
    icon: <AiOutlineCloudUpload />,
    
  },
  {
    title: "Low Interest Rates",
    description: "Our competitive rates help you save more while getting what you need.",
    icon: <RiSecurePaymentFill />,
  },
  {
    title: "24/7 Support",
    description: "Got questions? Our experts are always just a call or chat away.",
    icon: <TbReportMoney />,
  },
  {
    title: "24/7 Support",
    description: "Got questions? Our experts are always just a call or chat away.",
    icon: <FaFileSignature />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className='opacity'></div>
      
      <div className='why-section-content'>
      <h2>Why You Should Choose Us</h2>
        <p>Wealthwise is a cutting-edge platform designed to simplify your loan journey. We connect you with the best loan solutions, offering unmatched deals tailored to your unique needs. With Wealthwise, accessing funds is not just easy—it’s smart, seamless, and secure.</p>
        </div>
      
      <div className="why-cards">
        {features.map((item, index) => (
          <div key={index} className="why-card">
            <div className='why-card-icon'>
              {item.icon}
            </div>
            <div className='why-card-content'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
         
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
