import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Admin/AdminDashboard";
import AppointmentsPage from "./pages/appointments/AppointmentsPage";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/Home/HomePage";
import CustomerDashboard from "./pages/dashboard/Customer/CustomerDashboard";
import AuthPage from "./pages/Auth/AuthPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); 

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <Router>
      <MainLayout
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
    </Router>
  );
};

const MainLayout = ({ isLoggedIn, userRole, handleLogout, handleLogin }) => {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/signup", "/", "/customer-dashboard", "/patient-dashboard"];

  return (
    <div className="flex h-screen">
      {!hideSidebarRoutes.includes(location.pathname) && (
        <Sidebar isLoggedIn={isLoggedIn} onLogout={handleLogout} role={userRole} />
      )}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-dashboard" element={<DashboardPage />} />
          <Route path="/patient-dashboard/:patientId" element={<CustomerDashboard />} /> {/* 🔹 Fixed here */}
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
