// import React, { useEffect, useState } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const email = localStorage.getItem('adminEmail');
//         const password = localStorage.getItem('adminPassword');

//         if (!email || !password) {
//           localStorage.removeItem('adminEmail');
//           localStorage.removeItem('adminPassword');
//           setIsAuthenticated(false);
//           setIsLoading(false);
//           return;
//         }

//         const response = await axios.post('http://localhost:5000/api/admin/verify', {
//           email,
//           password
//         });

//         if (!response.data.authenticated) {
//           localStorage.removeItem('adminEmail');
//           localStorage.removeItem('adminPassword');
//         }
        
//         setIsAuthenticated(response.data.authenticated);
//       } catch (error) {
//         console.error('Authentication check failed:', error);
//         localStorage.removeItem('adminEmail');
//         localStorage.removeItem('adminPassword');
//         setIsAuthenticated(false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   if (isLoading) {
//     return (
//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         height: '100vh',
//         fontSize: '1.2rem',
//         color: '#666'
//       }}>
//         Verifying authentication...
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     // Redirect to login with the return url
//     return <Navigate to="/admin/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute; 


import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
