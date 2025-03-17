import React from 'react';
import LabMetricsCard from '../../components/dashboardWidgets/LabMetricsCard';
import RecentAppointments from '../../components/dashboardWidgets/RecentAppointments';
import AIInsightsSummary from '../../components/dashboardWidgets/AllInsightsSummary';
import ChatbotUsageStats from '../../components/dashboardWidgets/ChatbotUsageStats';
import AdminTasksPanel from '../../components/dashboardWidgets/AdminTasksPanel';

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Welcome to Swasthya Lab Dashboard</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <LabMetricsCard title="Total Tests Conducted" value="1250" icon="🧪" />
        <LabMetricsCard title="Active Patients" value="320" icon="👨‍⚕️" />
        <LabMetricsCard title="Upcoming Appointments" value="18" icon="🗓️" />
        <LabMetricsCard title="Report Summaries Generated" value="540" icon="📈" />
      </div>

      {/* Tables & Insights */}
      <RecentAppointments />
      <AIInsightsSummary />
      <ChatbotUsageStats />
      <AdminTasksPanel />
    </div>
  );
};

export default DashboardPage;
