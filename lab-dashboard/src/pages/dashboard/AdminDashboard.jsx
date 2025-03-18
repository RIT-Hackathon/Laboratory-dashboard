import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, Calendar, FileText, UploadCloud, Users } from "lucide-react";
import { CheckCircle, Clock } from "lucide-react";


const Dashboard = () => {
  // Hardcoded Data
  const appointments = [
    { id: 1, name: "John Doe", date: "2025-03-19", time: "10:00 AM", status: "Confirmed" },
    { id: 2, name: "Jane Smith", date: "2025-03-19", time: "12:30 PM", status: "Pending" },
  ];
  const reports = [{ id: 1, name: "Blood Test - John Doe", date: "2025-03-18" }];
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
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
            <div className="text-blue-500">{item.icon}</div>
            <div>
              <p className="text-gray-600 text-sm">{item.title}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="p-2">Patient</th>
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt) => (
              <tr key={apt.id} className="border-b">
                <td className="p-2">{apt.name}</td>
                <td className="p-2">{apt.date}</td>
                <td className="p-2">{apt.time}</td>
                <td className={`p-2 ${apt.status === "Confirmed" ? "text-green-600" : "text-yellow-500"}`}>{apt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Report Upload & AI Insights */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Upload Reports</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
            <UploadCloud size={18} />
            <span>Upload</span>
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">AI Insights</h2>
          <p className="text-gray-600">Recent Analysis: Normal Cholesterol Levels.</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Daily Appointments</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={[{ name: "Day 1", appointments: 5 }, { name: "Day 2", appointments: 10 }]}> 
              <Line type="monotone" dataKey="appointments" stroke="#3b82f6" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Appointment Status</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;