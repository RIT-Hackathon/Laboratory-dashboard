import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AppointmentPage from "./pages/AppointmentPage";
import IntentDetectionPage from "./pages/IntentDetectionPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SettingsPage from "./pages/SettingsPage";
import StaffPage from "./pages/StaffPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dock from "./components/Dock";
import { Toaster } from "react-hot-toast";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

const AppContent = () => {
  const navigate = useNavigate();

  const dockItems = [
    {
      icon: <VscHome />,
      label: "Dashboard",
      onClick: () => navigate("/"),
    },
    {
      icon: <VscArchive />,
      label: "Appointments",
      onClick: () => navigate("/appointments"),
    },
    {
      icon: <VscAccount />,
      label: "Staff",
      onClick: () => navigate("/staff"),
    },
    {
      icon: <VscSettingsGear />,
      label: "Settings",
      onClick: () => navigate("/settings"),
    },
  ];

  return (
    <>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/appointments" element={<ProtectedRoute><AppointmentPage /></ProtectedRoute>} />
        <Route path="/intent" element={<ProtectedRoute><IntentDetectionPage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        <Route path="/staff" element={<ProtectedRoute><StaffPage /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Dock items={dockItems} />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
