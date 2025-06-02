import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0
  });
  const navigate = useNavigate();

  // ✅ JWT Update: Check token instead of email/password
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const response = await axios.get('https://wealthwiser.onrender.com/api/admin/verify', {
          headers: {
            Authorization: `Bearer ${token}` // ✅ JWT Update
          }
        });

        if (!response.data.authenticated) {
          localStorage.removeItem('token'); // ✅ JWT Update
          navigate('/admin/login');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        localStorage.removeItem('token'); // ✅ JWT Update
        navigate('/admin/login');
      }
    };

    checkAuth();
  }, [navigate]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const token = localStorage.getItem('token'); // ✅ JWT Update
      try {
        const response = await axios.get('https://wealthwiser.onrender.com/api/form/all', {
          headers: {
            Authorization: `Bearer ${token}` // ✅ JWT Update
          }
        });
        setSubmissions(response.data);

        // Calculate statistics
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const monthAgo = new Date(today.getFullYear(), today.getMonth(), 1);

        const stats = {
          total: response.data.length,
          today: response.data.filter(sub => new Date(sub.createdAt) >= today).length,
          thisWeek: response.data.filter(sub => new Date(sub.createdAt) >= weekAgo).length,
          thisMonth: response.data.filter(sub => new Date(sub.createdAt) >= monthAgo).length
        };
        setStats(stats);
      } catch (err) {
        setError('Failed to fetch submissions');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return;
    const token = localStorage.getItem('token'); // ✅ JWT Update
    try {
      await axios.delete(`https://wealthwiser.onrender.com/api/form/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` // ✅ JWT Update
        }
      });

      setSubmissions(submissions.filter(sub => sub._id !== id));
      setStats(prev => ({
        ...prev,
        total: prev.total - 1,
        today: prev.today - (new Date(submissions.find(s => s._id === id).createdAt) >= new Date(new Date().setHours(0,0,0,0)) ? 1 : 0)
      }));
    } catch (err) {
      setError('Failed to delete submission');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // ✅ JWT Update
    navigate('/admin/login');
  };

  const StatCard = ({ title, value, icon }) => (
    <div className="admin-stat-card">
      <div className="admin-stat-icon">
        {icon}
      </div>
      <div>
        <p className="admin-stat-title">{title}</p>
        <p className="admin-stat-value">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="admin-logout-button"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="admin-main">
        {error && (
          <div className="admin-error-message" role="alert">
            <p>{error}</p>
          </div>
        )}

        <div className="admin-stats-grid">
          <StatCard title="Total Submissions" value={stats.total} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>} />
          <StatCard title="Today's Submissions" value={stats.today} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
          <StatCard title="This Week" value={stats.thisWeek} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
          <StatCard title="This Month" value={stats.thisMonth} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>} />
        </div>

        <div className="admin-table-container">
          <div className="admin-table-header">
            <h2>Recent Submissions</h2>
          </div>

          {loading ? (
            <div className="admin-loading">
              <div className="admin-loading-spinner"></div>
              <p className="mt-2 text-gray-600">Loading submissions...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Loan Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission._id}>
                      <td>{submission.name}</td>
                      <td>{submission.email}</td>
                      <td>{submission.phone}</td>
                      <td>{submission.loanType}</td>
                      <td>₹{submission.amount}</td>
                      <td>{new Date(submission.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(submission._id)}
                          className="admin-delete-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {submissions.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center text-gray-500 py-4">
                        No submissions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
