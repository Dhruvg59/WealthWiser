import React from 'react';
import './ScrollingCarousel.css';
import  Scrool1 from '../Images/Axis.png'
import  Scrool2 from '../Images/Bajaj.png'
import  Scrool3 from '../Images/Hdfc.png'
import  Scrool4 from '../Images/Hero.png'
import  Scrool5 from '../Images/Icici.png'
import  Scrool6 from '../Images/Idfc.png'
import  Scrool7 from '../Images/Indusind.png'
import  Scrool8 from '../Images/Kotak.png'
import  Scrool9 from '../Images/Sbi.png'
import  Scrool10 from '../Images/fullerton.webp'
import  Scrool11 from '../Images/Tatacapital.webp'


const images = [
  Scrool1,
  Scrool2,
  Scrool3,
  Scrool4,
  Scrool5,
  Scrool6,
  Scrool7,
  Scrool8,
  Scrool9,
  Scrool10,
  Scrool11,
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
