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
          <Route path="/card-loan" element={<CardLoan />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    

  );
}

export default App; 