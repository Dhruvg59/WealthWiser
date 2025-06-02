// import React, { useEffect, useState } from 'react';

// const AdminDashboard = () => {
//   const [submissions, setSubmissions] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/form') // replace with your deployed backend URL
//       .then(res => res.json())
//       .then(data => setSubmissions(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2>Form Submissions</h2>
//       <table border="1" cellPadding="8">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Loan Type</th>
//             <th>Amount</th>
//             <th>Message</th>
//             <th>Submitted At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submissions.map((entry, i) => (
//             <tr key={i}>
//               <td>{entry.name}</td>
//               <td>{entry.email}</td>
//               <td>{entry.phone}</td>
//               <td>{entry.loanType}</td>
//               <td>{entry.amount}</td>
//               <td>{entry.message}</td>
//               <td>{new Date(entry.createdAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('https://wealthwiser.onrender.com/api/form')
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>📋 Form Submissions</h2>
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
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
                <td>{i + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.loanType}</td>
                <td>₹{entry.amount}</td>
                <td>{entry.message}</td>
                <td>{new Date(entry.createdAt).toLocaleString()}</td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan="8" className="no-data">
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
