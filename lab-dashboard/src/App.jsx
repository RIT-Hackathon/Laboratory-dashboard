import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import LoginPage from './pages/LoginPage
import AppointmentsPage from './pages/appointments/AppointmentsPage';
import DashboardLayout from './components/layout/DashboardLayout';
import AuthLayout from './components/layout/AuthLayout';
import StaffPage from './pages/staff/StaffList';
import PatientsPage from './pages/patients/PatientsPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    console.log('Attempted Login:', { username, password });

    if (username === 'admin' && password === 'swasthya123') {
      console.log('Login successful!');
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials!');
      console.log('Login failed!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            {/* Routes that use Dashboard Layout (after login) */}
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/appointments" element={<AppointmentsPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/patients" element={<PatientsPage />} />
              {/* Add more dashboard-protected routes here */}
            </Route>

            {/* Optional: 404 Not Found route */}
            <Route path="*" element={<div className="text-center mt-10 text-xl font-semibold">404 - Page Not Found</div>} />
          </Routes>
        </BrowserRouter>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;