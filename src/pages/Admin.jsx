import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/form') // replace with your deployed backend URL
      .then(res => res.json())
      .then(data => setSubmissions(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Form Submissions</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Loan Type</th>
            <th>Amount</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((entry, i) => (
            <tr key={i}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.phone}</td>
              <td>{entry.loanType}</td>
              <td>{entry.amount}</td>
              <td>{entry.message}</td>
              <td>{new Date(entry.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
