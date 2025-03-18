import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../src/pages/dashboard/DashboardPage';
import AppointmentsPage from '../src/pages/appointments/AppointmentsPage';
import StaffPage from '../src/pages/staff/StaffList';
import PatientsPage from '../src/pages/patients/PatientsPage';
import LoginPage from '../src/pages/LoginPage';
import Sidebar from './components/layout/Sidebar';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'labstaff' && password === 'shiftstart123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route
              path="/staff"
              element={isLoggedIn ? <StaffPage /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/patients"
              element={isLoggedIn ? <PatientsPage /> : <Navigate to="/login" replace />}
            />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;