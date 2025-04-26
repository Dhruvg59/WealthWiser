import React from 'react';
import './ScrollingCarousel.css';

const images = [
  "https://img.freepik.com/premium-vector/bank-loan-successfully-illustration-concept-white-background_701961-3161.jpg?w=2000",
  "https://cms-resources.groww.in/uploads/How_to_Get_Personal_Loan_b9b945880a.jpg",
  "https://img.freepik.com/premium-vector/bank-loan-successfully-illustration-concept-white-background_701961-3161.jpg?w=2000",
  "https://cms-resources.groww.in/uploads/How_to_Get_Personal_Loan_b9b945880a.jpg",
];

const ScrollingCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} className="carousel-img" alt={`slide-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingCarousel;
