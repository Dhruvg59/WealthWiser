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
    title: "",
    description: "Compare Choose And Apply Among 40+ Banks",
    image: image1,
    icon: <CiBank />,
  },
  {
    title: "",
    description: "100% Paper Less Process",
    image: image2,
    icon: <AiOutlineCloudUpload />,
    
  },
  {
    title: "",
    description: "Simple & Secure Process",
    icon: <RiSecurePaymentFill />,
  },
  {
    title: "",
    description: "Easy Debt Consolidation Up to Rs 1 Crore.",
    icon: <TbReportMoney />,
  },
  {
    title: "",
    description: "Experienced Loan Profession.",
    icon: <FaFileSignature />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className='opacity'></div>
      
      <div className='why-section-content'>
      <h2>Why <span className="blue-text">Wealthwise</span></h2>
        <p><span className='bold-text'>Wealthwise</span> is a cutting-edge platform designed to simplify your loan journey. We connect you with the best loan solutions, offering unmatched deals tailored to your unique needs. With Wealthwise, accessing funds is not just easy—it’s smart, seamless, and secure.</p>
        </div>
      
      <div className="why-cards">
      {features.map((item, index) => {
  // Hide the 5th card on small screens using a CSS class
  const isHiddenOnMobile = index === 4 ? "hide-on-mobile" : "";
  return (
    <div key={index} className={`why-card ${isHiddenOnMobile}`}>
      <div className="why-card-icon">
        {item.icon}
      </div>
      <div className="why-card-content">
        <p>{item.description}</p>
      </div>
    </div>
  );
})}

      </div>
    </section>
  );
};

export default WhyChooseUs;
