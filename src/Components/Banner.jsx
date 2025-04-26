// Banner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Banner.css';

const Banner = () => {
  const images = [
    "https://img.freepik.com/premium-vector/bank-loan-successfully-illustration-concept-white-background_701961-3161.jpg?w=2000",
    "https://cms-resources.groww.in/uploads/How_to_Get_Personal_Loan_b9b945880a.jpg",
    "https://img.freepik.com/premium-vector/bank-loan-successfully-illustration-concept-white-background_701961-3161.jpg?w=2000"
  ];

  return (
    <div className="banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={50}
        slidesPerView={2}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img className="banner-img" src={src} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
