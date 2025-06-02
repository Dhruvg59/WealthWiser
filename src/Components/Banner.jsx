// // Banner.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './Banner.css';

// // Import local images
// import Banner1 from '../Images/Banner-1.avif';
// import Banner2 from '../Images/Banner-2.avif';
// import Banner3 from '../Images/Banner-3.avif';
// import Banner4 from '../Images/Banner-4.jpg';

// const Banner = () => {
//   const images = [
//     Banner1,
//     Banner2,
//     Banner3,
//     Banner4
//   ];

//   return (
//     <div className="banner">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         loop={true}
        
//         slidesPerView={1}
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index}>
//             <img className="banner-img" src={src} alt={`Banner ${index + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

import React, { useEffect, useState } from 'react';
import './Banner.css';

import Banner1 from '../Images/Banner-1.avif';
// import Banner2 from '../Images/Banner-2.avif';
// import Banner3 from '../Images/Banner-3.avif';
import Banner4 from '../Images/Banner-4.jpg';
import Banner5 from '../Images/10986.jpg';
// import Banner6 from '../Images/10693057.jpg';
import Banner6 from '../Images/rupixen-5lw6CLBZlCg-unsplash.jpg';




const images = [Banner1, Banner4, Banner5, Banner6];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${image})` }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
