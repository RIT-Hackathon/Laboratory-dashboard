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
    localStorage.removeItem("user"); // ✅ Clear user session on logout
    // Navigation handled in Sidebar after logout
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
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {!hideSidebarRoutes.includes(location.pathname) && (
        <div className="w-64 h-full shadow-lg">
          <Sidebar isLoggedIn={isLoggedIn} onLogout={handleLogout} role={userRole} />
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Header with improved styling */}
        <header className="bg-white shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              {/* <h1 className="text-xl font-semibold text-indigo-800">
                {location.pathname.includes('dashboard') ? 'Dashboard' : 
                 location.pathname.includes('appointments') ? 'Appointments' :
                 location.pathname.includes('login') ? 'Authentication' : 'Healthcare Portal'}
              </h1> */}
              {isLoggedIn && (
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    Logged in as <span className="font-medium text-indigo-600">{userRole}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content - Removed the extra wrapping div with white background and shadow */}
        <main className={`flex-1 ${isHomePage ? "" : "overflow-y-auto"} px-4 py-6 sm:px-6 lg:px-8`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin-dashboard/:adminId" element={<DashboardPage />} />
            <Route path="/patient-dashboard/:patientId" element={<CustomerDashboard />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer with improved styling */}
        <footer className="bg-white shadow-md z-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Healthcare App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;