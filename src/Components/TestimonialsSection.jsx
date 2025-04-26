import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Jane Doe',
    title: 'Product Designer',
    quote: 'This platform made my loan process smooth and stress-free. Highly recommended!',
    rating: 5,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Smith',
    title: 'Software Engineer',
    quote: 'Customer support was amazing. I got clarity at every step.',
    rating: 4,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Lisa Wong',
    title: 'Entrepreneur',
    quote: 'I was skeptical at first, but this turned out to be a lifesaver!',
    rating: 5,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'Daniel Lee',
    title: 'Freelancer',
    quote: 'Quick approval and great rates. I’d use this service again.',
    rating: 4,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Sophia Martinez',
    title: 'Marketing Manager',
    quote: 'The process was seamless. Love how transparent everything was.',
    rating: 5,
  },
];

const Wrapper = styled.div`
  padding: 3rem 0;
  background-color: #f9f9f9;
`;

const TestimonialsSection = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default TestimonialsSection;
