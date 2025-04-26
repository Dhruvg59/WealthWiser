import React from 'react';




const CarLoan = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
        Car Loan Application
      </h1>

      <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
        Apply for a car loan with low interest rates and fast approval. Fill in the form below
        to get started.
      </p>

      <h3 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>Requirements:</h3>
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        <li>✓ Minimum age: 21 years</li>
        <li>✓ Valid driver’s license</li>
        <li>✓ Proof of income</li>
        <li>✓ Good credit history</li>
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="amount"
          placeholder="Loan Amount"
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem',
};

export default CarLoan;
