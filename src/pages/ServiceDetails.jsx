import React from 'react';
import './ServiceDetails.css';
import { useState } from 'react';



const ServiceDetails = ({ title, description, points ,image, extraDetails }) => {

        const[formData,setFormData]=useState({
          name:"",
          email:"",
          phone:"",
          loantype:"",
          amount:"",
          services:"",
        });

        const handleChange =(e)=> {
          const {name, value}=e.target;
          setFormData(prevState =>({
            ...prevState,
            [name]:value

          }));
        };

        const handleSubmit = async(e) =>{
          e.preventDefault();
          try{
            const response=await fetch("http://localhost:5000/api/form",{
              method:"POST",
              headers:{
             "content-Type":'application/json',
              },
              body:JSON.stringify(formData)
            });
            if(!response.ok){
              throw new Error('Network response was not ok')
            }
            const data= await response.json();
            console.log('Form submitted succesfully',data);
            alert('form submitted succesfully')

            //to reset the form

            setFormData({
              name:'',
              email:'',
              phone:"",
              loantype:'',
              amount:'',
              services:'',
            });
          }
          catch(error){
            console.log('error submitting the form ',error);
            alert("error submitting the form")
          }
        };
    
  return (
    <>
    <div className="service-details-container">
      <div className="service-left">
      
        <h1>{title}</h1>
        {/* <p>{description}</p> */}
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <img src={image} alt={title} className="service-image" />
      </div>

      <div className="service-right">
        <h2> Get Loan Upto 75 Crore</h2>
        <form className="service-form" onSubmit={handleSubmit} >
          
          <input type="text"
           placeholder="Name" 
           name="name" 
           value={formData.name} 
           onChange={handleChange} 
           required />
          <input
           type="email" 
           placeholder="Email"
            />
          <input type="text"
           placeholder="Mobile No." />
          <input type="text"
           placeholder='Loan-Type' />
          <button type="submit">Apply Now</button>
        </form>
       
      </div>
      
    </div>

      {/* <div className="service-extra-details">
        {extraDetails.map((section, index) => (
        <div key={index}>
          <h2>{section.heading}</h2>
          <ul>
            {section.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
              ))}
              </ul>
          </div>
          ))}
        </div> */}

<div className="service-extra-details">
  {extraDetails.map((section, index) => (
    <div key={index} className="extra-section">
      <h2>{section.heading}</h2>

      {/* Paragraph before bullet list */}
      {section.paragraph && section.paragraphPosition === "before" && (
        <p>{section.paragraph}</p>
      )}

      {/* Bullet list */}
      {section.bullets && section.bullets.length > 0 && (
        <ul>
          {section.bullets.map((bullet, idx) =>
            typeof bullet === "string" ? (
              <li key={idx}>{bullet}</li>
            ) : (
              <li key={idx}>
                {bullet.text}
                {bullet.subBullets && bullet.subBullets.length > 0 && (
                  <ul>
                    {bullet.subBullets.map((sub, subIdx) => (
                      <li key={subIdx}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
      )}

      {/* Paragraph after bullet list */}
      {section.paragraph && section.paragraphPosition === "after" && (
        <p>{section.paragraph}</p>
      )}
    </div>
  ))}
</div>

    </>
  );
};

export default ServiceDetails;
