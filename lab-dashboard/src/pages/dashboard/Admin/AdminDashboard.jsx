import React, { useState } from "react";
import { Calendar, CheckCircle, Clock, FileText, Users, Plus, Trash2 } from "lucide-react";
import KPICard from "./KPICard";
import AppointmentsTable from "./AppointmentsTable";
import ChartsSection from "./ChartSection";
import StaffPopupForm from "./StaffPopUpForm";

const Dashboard = () => {
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Dr. Sarah Johnson", role: "Pathologist" },
    { id: 2, name: "Dr. Mike Reynolds", role: "Radiologist" },
  ]);

  const appointments = [
    { id: 1, name: "John Doe", date: "2025-03-19", time: "10:00 AM", status: "Confirmed" },
    { id: 2, name: "Jane Smith", date: "2025-03-19", time: "12:30 PM", status: "Pending" },
  ];

  const stats = { totalAppointments: 10, completed: 6, pending: 4, reportsReady: 3, staff: staffList.length };
  const pieData = [
    { name: "Confirmed", value: 6 },
    { name: "Pending", value: 4 },
  ];
  const colors = ["#4CAF50", "#FFC107"];

  const handleAddStaff = (newStaff) => {
    setStaffList([...staffList, { id: Date.now(), ...newStaff }]);
  };

  const handleRemoveStaff = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: "Total Appointments", value: stats.totalAppointments, icon: <Calendar /> },
          { title: "Completed Appointments", value: stats.completed, icon: <CheckCircle /> },
          { title: "Pending Appointments", value: stats.pending, icon: <Clock /> },
          { title: "Lab Staff", value: stats.staff, icon: <Users /> },
        ].map((item, index) => (
          <KPICard key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </div>

      {/* Add Staff Member Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowStaffForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2"
        >
          <Plus size={18} />
          <span>Add Staff</span>
        </button>
      </div>

      {/* Staff List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Lab Staff</h2>
        <ul>
          {staffList.map((staff) => (
            <li key={staff.id} className="flex justify-between p-2 border-b">
              <span>{staff.name} - {staff.role}</span>
              <button onClick={() => handleRemoveStaff(staff.id)} className="text-red-500 hover:text-red-700">
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Appointments Table */}
      <AppointmentsTable appointments={appointments} />


      {/* Charts Section */}
      <ChartsSection pieData={pieData} colors={colors} />

      {/* Staff Popup Form */}
      {showStaffForm && <StaffPopupForm onClose={() => setShowStaffForm(false)} onAddStaff={handleAddStaff} />}
    </div>
  );
};

export default Dashboard;