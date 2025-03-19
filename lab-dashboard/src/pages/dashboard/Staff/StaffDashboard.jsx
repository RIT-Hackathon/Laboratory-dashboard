import React from "react";
import { Calendar, CheckCircle, Clock, FileText, Users } from "lucide-react";
import KPICard from "./KPICard";
import AppointmentsTable from "./AppointmentsTable";
import ReportUpload from "./ReportUpload copy";
import ChartsSection from "./ChartSection";

const Dashboard = () => {
  const appointments = [
    { id: 1, name: "John Doe", date: "2025-03-19", time: "10:00 AM", status: "Confirmed" },
    { id: 2, name: "Jane Smith", date: "2025-03-19", time: "12:30 PM", status: "Pending" },
  ];

  const stats = { totalAppointments: 10, completed: 6, pending: 4, reportsReady: 3, users: 150 };
  const pieData = [
    { name: "Confirmed", value: 6 },
    { name: "Pending", value: 4 },
  ];
  const colors = ["#4CAF50", "#FFC107"];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: "Total Appointments", value: stats.totalAppointments, icon: <Calendar /> },
          { title: "Completed Appointments", value: stats.completed, icon: <CheckCircle /> },
          { title: "Pending Appointments", value: stats.pending, icon: <Clock /> },
          { title: "Reports Ready", value: stats.reportsReady, icon: <FileText /> },
        ].map((item, index) => (
          <KPICard key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </div>

      {/* Appointments Table */}
      <AppointmentsTable appointments={appointments} />

      {/* Report Upload Section */}
      <ReportUpload />

      {/* Charts Section */}
      <ChartsSection pieData={pieData} colors={colors} />
    </div>
  );
};

export default Dashboard;
