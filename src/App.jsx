import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ScrollingCarousel from './Components/ScrollingCarousel';
import Whyus from './Components/Whyus';
import LoanHighlights from './Components/LoanHighlights';
import CardLoan from './pages/card-loan';
import InfoSection from './Components/InfoSection';
import TestimonialCard from './Components/TestimonialCard';
import TestimonialsSection from './Components/TestimonialsSection';
import Footer from './Components/Footer';
import Calculator from './pages/Calculator';
import ServiceDetails from './pages/ServiceDetails';
import ContactUs from './pages/ContactUs';
import AdminDashboard from './pages/Admin';
import hdfc from"./Images/Hdfc.png";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <ScrollingCarousel />
              <Whyus />
              <LoanHighlights />
              <InfoSection />
              {/* <TestimonialCard
      avatar="https://randomuser.me/api/portraits/women/44.jpg"
      name="Jane Doe"
      title="Product Designer"
      quote="This platform made my loan process smooth and stress-free. Highly recommended!"
      rating={5}
    /> */}
    <TestimonialsSection />
            </>
          } />


      <Route path="/card-loan" element={
      <ServiceDetails 
       title="Card Loan"
       description="Apply for easy credit card loans."
       image={hdfc}
       points={[
        "Instant Approval",
        "Low Interest Rate",
        "Flexible Repayment",
      ]}
      extraDetails={[
        {
          heading: "Salaried Overdraft Features",
          bullets: ["Flexible Overdraft Limit: Access an overdraft limit based on your salary, offering flexibility up to ₹55 Lakhs or more, depending on eligibility.", "No EMI, Pay as You Use: Only pay interest on the amount you actually use, with no EMIs for unused credit", "Quick Access to Funds: Instant access to funds whenever you need them, directly into your bank account","Minimal Documentation: Simplified application with minimal paperwork—just your salary slips, ID, and bank statements","Competitive Interest Rates: Enjoy affordable and transparent interest rates, designed to keep your repayments low","Easy Repayment: Repay as you go, with flexible terms to suit your salary cycle.","No Collateral Required: Get approved for an overdraft without needing to pledge any assets or securities.","24/7 Access: Access your funds anytime, ensuring you have financial flexibility around the clock."]
        },
        {
          heading: "Eligibility-Who can Apply",
          bullets: ["Salaried Individual", "Age 20 to 60 years","Credit score 700 above","Net Monthly Income ₹20,000","Work experience minimum 1 year"]
        },
        {
          heading:"Required Documents",
          bullets:[" Identity proof / address proof (copy of passport/voter ID card/driving license/Aadhaar Card)", "Bank statement of previous 6 months (Passbook of previous 6 months)","3 latest salary slip/current dated salary certificate with the latest Form 16"]
        }
      ]}
    />
  } />

  <Route path="/selfemployed-loan" element={
    <ServiceDetails 
      title="OVERDRAFT FOR SELF EMPLOYED"
      description="Own your dream house today."
      image="/Images/Hdfc.png"
      points={[
        "Flexible Credit Oppurtunity Up to1 Crore",
        "Pay Interest Part only for what you utilize",
        "No EMI’s if no amount utilizes",
        "Withdraw Money When you need"
      ]}
      extraDetails={[
        {
          heading: "Self-Employed Overdraft Features",
          bullets: ["Custom Overdraft Limit: Get an overdraft limit tailored to your business income and financial needs, up to ₹1 Crore.", "Pay Only for What You Use: Interest is charged only on the utilized amount, providing cost-effective access to funds.", "Quick and Convenient Access: Instantly withdraw funds whenever required, directly from your account, without lengthy processes.","Minimal Paperwork: Simple application process with only essential documents like business financials, ID proof, and bank statements.","Flexible Repayment Options: Repay as you go, with terms that align with your cash flow and business cycle.","No Collateral Required: Enjoy an unsecured overdraft with no need to pledge assets, making it ideal for self-employed professionals.","Affordable Interest Rates: Competitive rates designed to keep your borrowing costs manageable and predictable","24/7 Fund Access: Round-the-clock availability of funds to meet any business or personal need at any time."],
          paragraphPosition: "after",
          paragraph:"G7loans' self-employed overdraft gives you the financial flexibility to manage your business operations efficiently, without unnecessary delays or complications."
        },
        {
          heading: "Eligibility-Who Can Apply",
          bullets: ["Business Vintage Minimum 2 years", "Age 21 to 65 years","Credit score 700 above","Turnover Required Minimum ₹30 Lakhs"]
        },
        {
          heading:"Required Documents",
          bullets:["The following documents are required along with your Overdraft Limit application:"," PAN Card – For Company/Firm/Individual",
          {
            text:"A copy of any of the following documents as identity proof:",
            subBullets:["Aadhaar Card","Passport","Voter's ID Card","PAN Card","Driving License"]
          },{
            text:"A copy of any of the following documents as address proof:",
            subBullets:["Aadhaar Card","Passport","Voter's ID Card","Driving License"]
          } ,"Bank statement of the previous 6 months","Latest ITR along with computation of income, Balance Sheet and Profit & Loss account for the previous 2 years, after being CA Certified/Audited","Proof of continuation (ITR/Trade license/Establishment/Sales Tax Certificate)",
        ]
        }
      
      ]}
    />
  } />
          {/* <Route path="/card-loan" element={<CardLoan />} /> */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    

  );
}

export default App; 