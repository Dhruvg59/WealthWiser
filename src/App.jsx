import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import FloatingLogo from './Components/FloatingLogo';
import ScrollToTop from './Components/ScroolToTop';
import AboutUs from './pages/AboutUs';
import Service from "./pages/Service";
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import BuisnessLoan from "./Images/buisnessloan.jpg"
import Salary from "./Images/salary.jpg"
import Selfemployed from "./Images/selfemployed.jpg"
import Propertyloan from "./Images/Propertyloan.jpg"
import PersonalLoan from "./Images/Personal loan.jpg"
import Buisness from "./Images/bloan1.jpg"
import HomeLoan from "./Images/homeloan.jpg"
import CarLoan from "./Images/carlaon.jpg"

// Create a wrapper component to conditionally render Navbar
const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isAdminRoute && <Navbar />}
      <Routes>
        {/* Admin routes first */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />

        {/* Public routes */}
        <Route path="/" element={
          <>
            <ScrollToTop/>
            <Banner />
            <ScrollingCarousel />
            <Whyus />
            <LoanHighlights />
            <InfoSection />
            <TestimonialsSection />
          </>
        } />
        <Route path="/msme-loan" element={
          <ServiceDetails 
            title=" MSME LOAN"
            image={BuisnessLoan}
            points={[
              "Loan amount of up to 5 Crore",
              "Attractive Interest rates starting @ 9.50%",
              "Hassle free application process",
              "Flexible repayment options",
            ]}
            extraDetails={[
              {
                heading: "MSME Loan Features",
                bullets: ["Tailored Loan Amounts: Access loans ranging from ₹2 Lakhs to ₹5 Crore, customized to suit the scale of your business", 
                  "Flexible Repayment Plans: Choose a repayment schedule that works best for your business, from 12 months to 96 months.", 
                  "Quick and Easy Disbursal: Get fast loan approvals and quick disbursal, so you can keep your business running smoothly.",
                  "No Collateral Required: Apply for an unsecured loan with no need to pledge any assets, making it easier for MSMEs to access funds.",
                  "Affordable Interest Rates: Benefit from competitive interest rates, designed to reduce the cost of borrowing for small and medium businesses.",
                  "Minimal Documentation: Submit just the necessary documents, such as business registration, financial statements, and KYC, for a hassle-free application.",
                  "Boost Business Growth: Use the loan for expansion, equipment purchase, working capital, or any business need to fuel your growth.",
                  "Support for All MSMEs: Whether you're a start-up or an established MSME, we offer solutions to meet your unique business needs."],
                  paragraphPosition:"after",
                  paragraph:"G7loans offers MSME loans that provide flexible, fast, and affordable financing to help your business grow without the complexity of traditional lending."
              },
              {
                heading: "Eligibility-Who can Apply",
                bullets: ["Business Vintage Minimum 2 years", "Age 21 to 80 years","Credit score 685 above","Turnover Eligibility assessment basis Banking and Cash Flow"]
              },
              {
                heading:"Required Documents",
                bullets:[ {
                  text:"Identity Proof: Identity proof of all the applicant(s) applying for the Business Loan for MSME. This point of MSME Loans documentation can include: ",
                  subBullets:["Aadhaar Card","Passport","Voter's ID Card","PAN Card","Driving License"]
                },
                {
                  text:"Residence Address Proof: the residential address proof would be for all the applicant(s) applying for the Business Loan for MSME. The acceptable address proof is: ",
                  subBullets:["Aadhaar Card","Passport","Utility Bill – Telephone or Electricity bill not more than 3 months old","Ration Card","Driving License"]
                },
                {
                  text:"Business Address Proof :  ",
                  subBullets:["Trade License","Lease Agreement",
                    "Utility Bill under the name of the business – Telephone or Electricity bill, not more than 3 months old","Sales Tax Certificate"]
                },
                "Proof of Age of the Applicant(s): even though it may be a business, the partners, individuals or directors involved in the business need to submit their proof of age as one of the documents required for Business Loan for MSME. ",
                "Business Plan; this would be necessary to ascertain your business, the industry and the long term growth prospects before the loan is sanctioned. ",
                "Bank Statement: Bank account statement under the name of the company of the last 6 months.",
                "Income Proof: this is the income proof of the business that could be the Income Tax Returns with the profit and loss account and balance sheet.",
                {
                  text:"Registration Proof: A vital documentation required for Business Loan for MSME is proof of registration that could be:  ",
                  subBullets:["Partnership deed","Memorandum of Associations (MoA), Article of Associations (AoA)",
                    "Sales Deed","Copy of Licenses & Certificates","Rent agreement"]
                },"MSME Certificate also known as Udyam Registration Certificate"
              ]
              }
            ]}
          />
        } />
        <Route path="/card-loan" element={
          <ServiceDetails 
            title="Overdraft For Salaried"
            description="Apply for easy credit card loans."
            image={Salary}
            points={[
              "Instant Approval",
              "Attractive Interest rates starting @ 14%",
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
            image={Selfemployed}
            points={[
              "Flexible Credit Oppurtunity Up to1 Crore",
              "Pay Interest Part only for what you utilize",
              "No EMI's if no amount utilizes",
              "Withdraw Money When you need"
            ]}
            extraDetails={[
              {
                heading: "Self-Employed Overdraft Features",
                bullets: ["Custom Overdraft Limit: Get an overdraft limit tailored to your business income and financial needs, up to ₹1 Crore.", "Pay Only for What You Use: Interest is charged only on the utilized amount, providing cost-effective access to funds.", "Quick and Convenient Access: Instantly withdraw funds whenever required, directly from your account, without lengthy processes.","Minimal Paperwork: Simple application process with only essential documents like business financials, ID proof, and bank statements.","Flexible Repayment Options: Repay as you go, with terms that align with your cash flow and business cycle.","No Collateral Required: Enjoy an unsecured overdraft with no need to pledge assets, making it ideal for self-employed professionals.","Affordable Interest Rates: Competitive rates designed to keep your borrowing costs manageable and predictable","24/7 Fund Access: Round-the-clock availability of funds to meet any business or personal need at any time."],
                paragraphPosition: "after",
                paragraph:"Wealthwise' self-employed overdraft gives you the financial flexibility to manage your business operations efficiently, without unnecessary delays or complications."
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
        <Route path="/personal-loan" element={
          <ServiceDetails 
            title="PERSONAL LOAN"
            image={PersonalLoan}
            points={[
              "Loan amount of up to 1 Crore",
              "Attractive Interest rates starting @ 10.5%",
              "Money in account with in 24 Hrs",
              "Compare and choose among 40+ Banks & NBFCs"
            ]}
            extraDetails={[
              {
                heading: "Personal Loan Features",
                bullets: ["Flexible Loan Amount: Borrow anywhere from ₹50,000 to ₹1 Crore, based on your eligibility.",
                  "Attractive Interest Rates: Enjoy affordable interest rates that keep your repayment manageable.", 
                  "Customizable Repayment Period: Choose a repayment tenure that suits your financial situation, from 12 to 96 months.",
                  "No Collateral Required: Get access to funds without the need for any assets as security.",
                  "Quick Online Processing: Apply, get approved, and receive funds swiftly with our fully digital application process.",
                  "Minimal Documentation: Submit only the essential documents like ID proof, income details, and bank statements.",
                  "Instant Approval: Receive an instant loan decision and fast disbursal to meet your urgent needs.",
                  "Versatile Loan Use: Use the funds for any personal need—whether it's for education, travel, medical expenses, or home improvement."],
                paragraphPosition: "after",
                paragraph:"With Wealthwise, getting a personal loan is easy, quick, and hassle-free!"
              },
              {
                heading: "Eligibility-Who Can Apply",
                bullets: ["Salaried Individual", 
                  "Age 21 to 80 years",
                  "Credit score 650 above",
                  "Net Monthly Income ₹15,000",
                  "Work experience minimum 6 months",]
              },
              {
                heading:"Required Documents",
                bullets:["Identity proof / address proof (copy of passport/voter ID card/driving license/Aadhaar Card)","Bank statement of previous 6 months (Passbook of previous 6 months) ",
                  "3 latest salary slip/current dated salary certificate with the latest Form 16",
              ]
              }
            ]}
          />
        } />
        <Route path="/property-loan" element={
          <ServiceDetails 
            title="Loan Against property" 
            description="Apply for easy credit card loans."
            image={Propertyloan}
            points={[
              "Loan amount of up to 75 Crore",
              "Attractive Interest rates starting @ 9%",
              "Maximum Funding up to 80%",
              "Tenure up to 25 years",
            ]}
            extraDetails={[
              {
                heading: "Loan Against Property Features",
                bullets: ["Flexible Loan Amounts: Borrow up to 80% of your property's market value, with amounts tailored to your needs.",
                  "Competitive Interest Rates: Enjoy affordable interest rates that keep your loan costs manageable and predictable. ",
                  "Long Repayment Tenure: Choose from flexible repayment terms ranging from 5 years to 25 years, based on your financial comfort",
                  "Quick Processing & Disbursal: Fast approval and quick disbursal, allowing you to access funds when you need them most.",
                  "No Hidden Fees: Clear, upfront loan terms with no unexpected charges or surprises",
                  "Low Documentation: Simple paperwork, requiring only essential documents such as property papers, ID, and income proof.",
                  "Unsecured Loan Option: While the loan is secured by property, there's no need for additional guarantees or complex paperwork.",
                  "Use Funds for Any Purpose: Whether for business expansion, education, or personal needs, the loan is flexible to suit various purposes."],
                  paragraphPosition:"after",
                  paragraph:"Wealthwise provides loan against property solutions with transparent processes, low interest rates, and quick access to funds, so you can unlock the value of your property to meet your financial goals."
              },
              {
                heading: "Eligibility-Who can Apply",
                bullets: ["Salaried Individual", 
                  "Net Monthly Income - Minimum ₹5000",
                  "For Self-employed - ₹1 Lakh p.a.",
                  "Business Vintage Minimum 1 year",
                  "Age 18 to 70 years",
                  "Credit score 600 above",
                ]
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
                } ,
              ]
              },
              {
                heading:"Documents Required for Loan Against Property for Salaried Person",
                bullets:[" A duly filled Form 16",
                  "A letter from your employer certifying your employment status and the duration of your employment",
                  "Your salary slips of the last 3-6 months",
                  "Your filed IT Returns of the last three years",
                  "Investment proofs (shares, fixed deposits), if any.",
                  "Account statement showing credit of salary."]
              },
              {
                heading:"Documents Required for Loan Against Property for Self Employed Person",
                bullets:[" Business address proof",
                  "Their duly filed tax returns of the past three years",
                  "Company Balance Sheet, Profit and Loss Statements, duly audited/attested by a Chartered Accountant",
                  "Their business license/professional practice (for doctors, lawyers, etc.) documents",
                  "Copies of registration certification for establishments like shops, factories, clinics, offices, etc..",
                  "Account statement of business"]
              },
              {
                heading:"Property Documents Required for Loan Against Property",
                paragraphPosition:"before",
                paragraph: "Apart from your basic and income-specific documents required for Loan against property, you also have to provide the documents of the property you intend to buy through the loan. These include",
                bullets:[" A No Objection Certificate (NOC) provided by the society or the builder",
                  "The original, registered sale deed, letter of allotment or stamped agreement of sale, provided by the builder",
                  "Occupancy Certificate for ready-to-move-in properties",
                  "Maintenance and electricity bills, along with property tax receipts",
                  "Original receipts showcasing any advance payments made to purchase the property",
                  "A copy of the building plan for purchasing flats, villas, bungalows, etc.",
                  "Original receipt showcasing the land tax paid, along with possession certificate issued by the relevant authorities.",
                  "Original receipt showcasing the land tax paid, along with possession certificate issued by the relevant authorities.",
                  "A detailed estimate of construction costs (in the case of construction loans).",]
              }
            ]}
          />
        } />
        <Route path="/business-loan" element={
          <ServiceDetails 
            title="BUSINESS LOAN"
            image={Buisness}
            points={[
              "Loan amount of up to 2 Crore",
              "Attractive Interest rates starting @ 15%",
              "No Collateral Required","Compare and choose among 30+ Banks & NBFCs"
            ]}
            extraDetails={[
              {
                heading: "Business Loan Features",
                bullets: ["Tailored Loan Amount: Access funding ranging from ₹1 Lakh to ₹2 Crore, customized to your business needs", 
                  "Flexible Repayment Terms: Choose a repayment schedule that aligns with your business cash flow, from 12 months to 96 months", 
                  "No Collateral Required: Get unsecured loans with no need for assets as collateral, making it easier for businesses to grow.",
                  "Fast Online Processing: Apply and get approvals quickly through our fully digital platform, minimizing delays.",
                  "Competitive Interest Rates: Benefit from attractive interest rates designed to keep your loan costs low",
                  "Quick Disbursal: Funds are disbursed rapidly, ensuring you can take advantage of opportunities without waiting.",
                  "Minimal Documentation: Submit only essential documents like business registration, financial statements, and KYC details.",
                  "Use for Any Business Need: Whether for expansion, inventory, equipment, or working capital, the loan can be used to support various business purposes"],
                  paragraphPosition:"after",
                  paragraph:"wealthwise offers business loans that help fuel your growth with flexible terms and fast processing."
              },
              {
                heading: "Eligibility-Who can Apply",
                bullets: ["Business Vintage Minimum 1 year", "Age 18 to 65 years","Credit score 600 above","No Turnover Required",]
              },
            ]}
          />
        } /> 
         <Route path="/private-funding" element={
          <ServiceDetails 
            title="Private Funding"
            image={BuisnessLoan}
            points={[
              "Loan amount available up to ₹100 Crore",
              "No Collateral Required",
              "No CIBIL Check",
              "Instant Funding",
              "Same Day Approval",
              "Loan Period: 4–6 Months",
              "Loan Amount Range: ₹10 Lakh to ₹100 Crore"
            ]}
            extraDetails={[
              {
                heading: "Simple Process",
                bullets: [
                  "Submit Your Documents",
                  "Check Your Eligibility",
                  "Get Approval Within 1 Hour"
                ]
              }
            ]}
          />
        } />      

        <Route path="/home-loan" element={
          <ServiceDetails 
            title="HOME LOAN"
            image={HomeLoan}
            points={[
              "Loan amount of up to 25 Crore",
              "Attractive Interest rates starting @ 8.40%",
              "Maximum Funding up to 90%",
              "Tenure up to 30 years"
            ]}
            extraDetails={[
              {
                heading: "Home Loan Features",
                bullets: ["Customizable Loan Amount: Borrow amounts based on your home's value, ranging from ₹5 Lakhs to ₹25 Crore, based on eligibility.",
                  "Attractive Interest Rates: Benefit from competitive rates, ensuring affordable monthly payments and lower overall costs.",
                  "Flexible Tenure Options: Choose a repayment period that fits your budget, from 10 years to 30 years",
                  "No Hidden Charges: Transparent loan terms with no surprise fees or hidden costs throughout the process.",
                  "Quick Approval & Disbursal: Fast approval and disbursal, helping you secure your dream home without unnecessary delays",
                  "Minimal Documentation: Submit only essential documents such as KYC, income proof, and property papers for a smooth application process.",
                  "Top-up Loan Facility: Easily access additional funds with a top-up loan option for home renovation or other personal needs.",
                  "Flexibility in Usage: Use the loan for purchasing, constructing, or renovating your home."],
                  paragraphPosition:"after",
                  paragraph:"Wealthwise offers home loans designed to simplify the journey to homeownership with quick processing, transparent terms, and easy repayment options."
              },
              {
                heading: "Eligibility-Who can Apply",
                bullets: ["Net Monthly Income - Minimum ₹5000", 
                  "For Self-employed - ₹1 Lakh p.a.",
                  "Business Vintage Minimum 1 year",
                  "Age 18 to 70 years",
                  "Credit score 600 above"]
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
                } ,
              ]
              },{
                heading: "Documents Required for Home Loan for Salaried Person",
                bullets: ["A duly filled Form 16", "A letter from your employer certifying your employment status and the duration of your employment",
                  "Your salary slips of the last 3-6 months",
                  "Your filed IT Returns of the last three years",
                  "Investment proofs (shares, fixed deposits), if any.",
                  "Account statement showing credit of salary"]
              },{
                heading:"Documents Required for Home Loan for Self Employed",
                bullets:["Business address proof",
                  "Their duly filed tax returns of the past three years",
                  "Company Balance Sheet, Profit and Loss Statements, duly audited/attested by a Chartered Accountant",
                  "Their business license/professional practice (for doctors, lawyers, etc.) documents",
                  "Copies of registration certification for establishments like shops, factories, clinics, offices, etc.",
                  "Account statement of business."
                ]
              },{
                heading:"Property Documents Required for Home Loan",
                paragraphPosition:"before",
                paragraph:"Apart from your basic and income-specific documents required for Home Loan, you also have to provide the documents of the property you intend to buy through the loan. These include:",
                bullets:["A No Objection Certificate (NOC) provided by the society or the builder",
                  "The original, registered sale deed, letter of allotment or stamped agreement of sale, provided by the builder",
                  "Occupancy Certificate for ready-to-move-in properties",
                  "Maintenance and electricity bills, along with property tax receipts",
                  "Original receipts showcasing any advance payments made to purchase the property",
                  "A copy of the building plan for purchasing flats, villas, bungalows, etc",
                  "Original receipt showcasing the land tax paid, along with possession certificate issued by the relevant authorities.",
                  "Bank account statements showing any payments made to the seller or builder.",
                ],
                paragraphPosition:"after",
                paragraph:"A detailed estimate of construction costs (in the case of construction loans)."
              }
            ]}
          />
        } />
        <Route path="/car-loan" element={
          <ServiceDetails 
            title="CAR LOAN"
            image={CarLoan}
            points={[
              "Loan amount of up to 100% ON Road Funding",
              "New Car Interest rates starting @ 9.10%",
              "Used Car Interest rates starting @ 10%",
              "Tenure up to 84 months"
            ]}
            extraDetails={[
              {
                heading: "Car Loan Features",
                bullets: ["Flexible Loan Amount: Borrow up to ₹50 Lakhs to finance your new car, based on your eligibility.",
                  "Affordable Interest Rates: Benefit from low and competitive interest rates that make your car loan more affordable.", 
                  "Quick Approval & Disbursal: Fast approval process with funds disbursed quickly, so you can drive away in your new car sooner",
                  "Customizable Repayment Plans: Choose repayment tenures from 12 months to 7 years, ensuring flexibility in your monthly installments.",
                  "Minimal Documentation: Submit only basic documents like KYC, income proof, and car details for a hassle-free application process.",
                  "No Prepayment Penalties: Enjoy the freedom to repay the loan early without any extra charges.",
                  "Loan for All Types of Cars: Available for both sedan and SUV models, from any authorized dealer or showroom."
                ]
              },
              {
                heading: "Used Car Loan Features",
                bullets: ["Flexible Loan Amount: Borrow up to 80% of the car's market value for pre-owned cars, depending on the car's condition and your eligibility.",
                  "Low Interest Rates: Affordable interest rates that make financing your used car easy and cost-effective.",
                  "Quick & Simple Approval: Fast approval process with minimal paperwork, ensuring you get your loan quickly.",
                  "Customizable Tenure: Choose from repayment periods of 12 months to 5 years, tailored to your budget.",
                  "No Collateral Required: Get financing for your used car without the need for additional collateral",
                  "Minimal Documentation: Submit only essential documents like ID proof, income details, and car-related documents for smooth processing.",
                  "Easy Disbursal: Funds are disbursed quickly, enabling you to complete the purchase without delays."],
                  paragraphPosition:"after",
                  paragraph:"Wealthwise makes both new and used car financing easy, offering quick processing, affordable terms, and flexible options to get you on the road faster."
              },
            ]}
          />
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Catch all route - must be last */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingLogo />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 