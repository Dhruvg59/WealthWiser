import React, { useState } from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ title, description, points, image, extraDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
    message: "",
    type: "Contact"
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      console.log('Submitting form data:', formData);
      const token = localStorage.getItem('token');
      
      const response = await fetch("https://wealthwiser.onrender.com/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSuccess(true);
      console.log('Form submitted successfully:', data);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        loanType: "",
        amount: "",
        message: "",
        type: "contact"
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || 'Error submitting form. Please try again.');
    } finally {
      setLoading(false);
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
          <h2>Get Loan Upto 75 Crore</h2>
          
          {error && (
            <div className="admin-error-message" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          {success && (
            <div className="admin-success-message" role="alert">
              <p>Form submitted successfully! We'll get back to you soon.</p>
            </div>
          )}

          <form className="service-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Loan Type"
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Loan Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Enter City"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="admin-loading-spinner"></div>
                  Submitting...
                </span>
              ) : (
                'Apply Now'
              )}
            </button>
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
