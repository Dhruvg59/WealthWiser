// TestimonialCard.jsx
import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';


const Card = styled.div`
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 20px 30px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Inter', 'Segoe UI', sans-serif;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 80px;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  margin: 0.5rem 0 0.2rem;
  font-size: 1.2rem;
`;

const Title = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

const Quote = styled.p`
  font-style: italic;
  color: #555;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 1.2rem;
`;

const TestimonialCard = ({ avatar, name, title, quote, rating = 5 }) => {
  return (
    <Card>
      <UserIcon />
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Quote>"{quote}"</Quote>
      <Stars>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</Stars>
    </Card>
  );
};

export default TestimonialCard;
