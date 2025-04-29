import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ title, description, points }) => {
  return (
    <>
    <div className="service-details-container">
      <div className="service-left">
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="service-right">
        <form className="service-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Mobile No." />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Apply Now</button>
        </form>
       
      </div>
      
    </div>

    <div>
        <div className='service-right-image'>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, tempora?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ratione id, corrupti veritatis inventore temporibus voluptatem, optio cumque neque esse aspernatur cum beatae sapiente accusamus quis sequi amet nobis facere velit expedita eius libero non voluptates eaque! Dicta mollitia praesentium laudantium expedita maxime, itaque adipisci accusantium accusamus eligendi nobis veritatis excepturi error explicabo vero quasi? Sunt numquam iure tempora optio consequatur, fugit placeat voluptas corporis officia nisi tenetur maiores distinctio mollitia atque voluptates minima! Corrupti reiciendis suscipit consequuntur accusantium, atque aut error, labore enim nihil delectus perferendis ea quas omnis dignissimos laboriosam obcaecati repudiandae. Cumque ratione officiis obcaecati enim eius.</p>
        </div>
    </div>
    </>
  );
};

export default ServiceDetails;
