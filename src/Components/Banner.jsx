// Banner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Banner.css';

// Import local images
import Banner1 from '../Images/Banner-1.avif';
import Banner2 from '../Images/Banner-2.avif';
import Banner3 from '../Images/Banner-3.avif';
import Banner4 from '../Images/Banner-4.jpg';

const Banner = () => {
  const images = [
    Banner1,
    Banner2,
    Banner3,
    Banner4
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
            <img className="banner-img" src={src} alt={`Banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
