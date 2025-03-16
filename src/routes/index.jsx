import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import AppointmentPage from '../pages/AppointmentPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import IntentDetectionPage from '../pages/IntentDetectionPage';
import SettingsPage from '../pages/SettingsPage';
import StaffPage from '../pages/StaffPage';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/intent" element={<IntentDetectionPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;