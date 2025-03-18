import React, { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { 
  Bell, Calendar, FileText, UploadCloud, Users, CheckCircle, Clock, 
  FlaskRound, Microscope, AlertTriangle, Activity, Stethoscope, ClipboardList,
  User, Filter, Search, PlusCircle, BarChart2
} from "lucide-react";

const EnhancedStaffDashboard = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("overview");
  
  // Staff information
  const staffInfo = {
    name: "Dr. Sarah Johnson",
    role: "Lab Technician",
    department: "Hematology",
    testsPerformed: 278,
    accuracy: "98.7%"
  };

  // Hardcoded Data
  const appointments = [
    { id: 1, name: "John Doe", date: "2025-03-19", time: "10:00 AM", status: "Confirmed", test: "Complete Blood Count" },
    { id: 2, name: "Jane Smith", date: "2025-03-19", time: "12:30 PM", status: "Pending", test: "Lipid Panel" },
    { id: 3, name: "Michael Brown", date: "2025-03-20", time: "09:15 AM", status: "Confirmed", test: "Urinalysis" },
    { id: 4, name: "Emily Davis", date: "2025-03-20", time: "11:45 AM", status: "Confirmed", test: "Glucose Test" },
    { id: 5, name: "Robert Wilson", date: "2025-03-21", time: "02:00 PM", status: "Pending", test: "Liver Function" },
  ];
  
  const reports = [
    { id: 1, patientName: "John Doe", testName: "Complete Blood Count", date: "2025-03-18", status: "Completed", priority: "Normal" },
    { id: 2, patientName: "Linda Chen", testName: "Lipid Panel", date: "2025-03-18", status: "In Review", priority: "Urgent" },
    { id: 3, patientName: "Robert Wilson", testName: "Liver Function", date: "2025-03-17", status: "Pending", priority: "High" },
    { id: 4, patientName: "Maria Garcia", testName: "Thyroid Panel", date: "2025-03-16", status: "Completed", priority: "Normal" },
  ];
  
  const sampleInventory = [
    { id: 1, type: "Blood", count: 42, alerts: "Within normal range" },
    { id: 2, type: "Urine", count: 28, alerts: "Low stock" },
    { id: 3, type: "Tissue", count: 15, alerts: "Within normal range" },
    { id: 4, type: "CSF", count: 8, alerts: "Critical low" },
  ];
  
  const performanceMetrics = [
    { name: "Tests Processed", value: 278 },
    { name: "Sample Rejections", value: 3 },
    { name: "Errors Reported", value: 2 },
    { name: "Turn-around Time", value: "24.3 hrs" },
    { name: "Quality Score", value: "96%" },
  ];
  
  const stats = { 
    totalAppointments: 24, 
    completed: 16, 
    pending: 8, 
    reportsReady: 12, 
    criticalResults: 3,
    samplesProcessed: 278,
    testsPerformed: staffInfo.testsPerformed,
    qualityControl: "Passed"
  };
  
  const pieData = [
    { name: "Confirmed", value: 16 },
    { name: "Pending", value: 8 },
  ];
  
  const testTypeData = [
    { name: "CBC", count: 52 },
    { name: "Lipid Panel", count: 38 },
    { name: "Liver Function", count: 25 },
    { name: "Urinalysis", count: 43 },
    { name: "Glucose", count: 35 },
    { name: "Other", count: 85 },
  ];
  
  const weeklyData = [
    { day: "Mon", tests: 42 },
    { day: "Tue", tests: 38 },
    { day: "Wed", tests: 45 },
    { day: "Thu", tests: 40 },
    { day: "Fri", tests: 52 },
    { day: "Sat", tests: 32 },
    { day: "Sun", tests: 29 },
  ];
  
  const colors = ["#4CAF50", "#FFC107", "#F44336", "#2196F3", "#9C27B0", "#795548"];
  const statusColors = {
    "Confirmed": "text-green-600",
    "Pending": "text-yellow-500",
    "Completed": "text-green-600",
    "In Review": "text-blue-500",
    "Urgent": "text-red-600",
    "High": "text-orange-500",
    "Normal": "text-green-600",
    "Critical low": "text-red-600",
    "Low stock": "text-yellow-500",
    "Within normal range": "text-green-600"
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navigation */}
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Microscope className="text-blue-600" />
          <h1 className="text-xl font-bold">LabTech Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="text-gray-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <span>SJ</span>
            </div>
            <span className="font-medium">{staffInfo.name}</span>
          </div>
        </div>
      </div>

      {/* Staff Profile Card */}
      <div className="p-6">
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold">{staffInfo.name}</h2>
                <p className="text-gray-600">{staffInfo.role} • {staffInfo.department}</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Tests Performed</p>
                <p className="text-xl font-bold">{staffInfo.testsPerformed}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">Accuracy Rate</p>
                <p className="text-xl font-bold">{staffInfo.accuracy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b mb-6">
          {[
            { id: "overview", label: "Overview", icon: <BarChart2 size={16} /> },
            { id: "appointments", label: "Appointments", icon: <Calendar size={16} /> },
            { id: "lab-reports", label: "Lab Reports", icon: <FileText size={16} /> },
            { id: "inventory", label: "Sample Inventory", icon: <FlaskRound size={16} /> },
            { id: "performance", label: "Performance", icon: <Activity size={16} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center space-x-1 px-4 py-2 border-b-2 ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab Content */}
        {activeTab === "overview" && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: "Total Appointments", value: stats.totalAppointments, icon: <Calendar className="text-blue-500" /> },
                { title: "Completed Appointments", value: stats.completed, icon: <CheckCircle className="text-green-500" /> },
                { title: "Pending Appointments", value: stats.pending, icon: <Clock className="text-yellow-500" /> },
                { title: "Reports Ready", value: stats.reportsReady, icon: <FileText className="text-purple-500" /> },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                  <div>{item.icon}</div>
                  <div>
                    <p className="text-gray-600 text-sm">{item.title}</p>
                    <p className="text-xl font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Critical Alerts */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold flex items-center">
                    <AlertTriangle size={18} className="text-red-500 mr-2" />
                    Critical Alerts
                  </h2>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">{stats.criticalResults} New</span>
                </div>
                <ul className="space-y-3">
                  <li className="border-l-4 border-red-500 pl-3 py-1">
                    <p className="font-medium">Abnormal Glucose Result</p>
                    <p className="text-sm text-gray-600">Patient: Michael Brown</p>
                  </li>
                  <li className="border-l-4 border-red-500 pl-3 py-1">
                    <p className="font-medium">Critical Potassium Level</p>
                    <p className="text-sm text-gray-600">Patient: Linda Chen</p>
                  </li>
                  <li className="border-l-4 border-red-500 pl-3 py-1">
                    <p className="font-medium">Elevated WBC Count</p>
                    <p className="text-sm text-gray-600">Patient: Robert Wilson</p>
                  </li>
                </ul>
              </div>

              {/* Weekly Test Volume */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Weekly Test Volume</h2>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={weeklyData}>
                    <XAxis dataKey="day" />
                    <Tooltip />
                    <Bar dataKey="tests" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Test Distribution */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Test Type Distribution</h2>
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie 
                      data={testTypeData} 
                      cx="50%" 
                      cy="50%" 
                      outerRadius={60} 
                      fill="#8884d8" 
                      dataKey="count"
                      nameKey="name"
                      label={(entry) => entry.name}
                    >
                      {testTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Recent Lab Reports</h2>
                <button className="text-blue-500 text-sm flex items-center">
                  View All <span className="ml-1">→</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-600 border-b">
                      <th className="p-2">Patient</th>
                      <th className="p-2">Test</th>
                      <th className="p-2">Date</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.slice(0, 3).map((report) => (
                      <tr key={report.id} className="border-b">
                        <td className="p-2">{report.patientName}</td>
                        <td className="p-2">{report.testName}</td>
                        <td className="p-2">{report.date}</td>
                        <td className={`p-2 ${statusColors[report.status]}`}>{report.status}</td>
                        <td className={`p-2 ${statusColors[report.priority]}`}>{report.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Appointments Tab Content */}
        {activeTab === "appointments" && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Upcoming Appointments</h2>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search size={18} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search appointments"
                    className="pl-8 pr-2 py-1 border rounded-md text-sm"
                  />
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
                  <PlusCircle size={14} className="mr-1" />
                  New
                </button>
                <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-md text-sm flex items-center">
                  <Filter size={14} className="mr-1" />
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="p-2">Patient</th>
                    <th className="p-2">Test Type</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Time</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt) => (
                    <tr key={apt.id} className="border-b">
                      <td className="p-2">{apt.name}</td>
                      <td className="p-2">{apt.test}</td>
                      <td className="p-2">{apt.date}</td>
                      <td className="p-2">{apt.time}</td>
                      <td className={`p-2 ${statusColors[apt.status]}`}>{apt.status}</td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">View</button>
                          <button className="text-gray-500 hover:text-gray-700">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <span>Showing 5 of 24 appointments</span>
              <div className="flex space-x-2">
                <button className="px-2 py-1 border rounded">Prev</button>
                <button className="px-2 py-1 bg-blue-500 text-white rounded">1</button>
                <button className="px-2 py-1 border rounded">2</button>
                <button className="px-2 py-1 border rounded">3</button>
                <button className="px-2 py-1 border rounded">Next</button>
              </div>
            </div>
          </div>
        )}

        {/* Lab Reports Tab Content */}
        {activeTab === "lab-reports" && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Lab Reports</h2>
                <div className="flex items-center space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
                    <UploadCloud size={14} className="mr-1" />
                    Upload New
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-md text-sm flex items-center">
                    <Filter size={14} className="mr-1" />
                    Filter
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-600 border-b">
                      <th className="p-2">Patient</th>
                      <th className="p-2">Test</th>
                      <th className="p-2">Date</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Priority</th>
                      <th className="p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report) => (
                      <tr key={report.id} className="border-b">
                        <td className="p-2">{report.patientName}</td>
                        <td className="p-2">{report.testName}</td>
                        <td className="p-2">{report.date}</td>
                        <td className={`p-2 ${statusColors[report.status]}`}>{report.status}</td>
                        <td className={`p-2 ${statusColors[report.priority]}`}>{report.priority}</td>
                        <td className="p-2">
                          <div className="flex space-x-2">
                            <button className="text-blue-500 hover:text-blue-700">View</button>
                            <button className="text-green-500 hover:text-green-700">Verify</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">AI Insights</h2>
              <div className="border-l-4 border-blue-500 pl-3 py-2 mb-3 bg-blue-50">
                <p className="font-medium">Pattern detected in CBC results</p>
                <p className="text-sm text-gray-600">Several patients showing elevated white blood cell counts.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3 py-2 bg-green-50">
                <p className="font-medium">Quality Control Check</p>
                <p className="text-sm text-gray-600">All calibration tests passed successfully.</p>
              </div>
            </div>
          </div>
        )}

        {/* Sample Inventory Tab Content */}
        {activeTab === "inventory" && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Sample Inventory</h2>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                Update Inventory
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="p-2">Sample Type</th>
                    <th className="p-2">Count</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleInventory.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-2">{item.type}</td>
                      <td className="p-2">{item.count}</td>
                      <td className={`p-2 ${statusColors[item.alerts]}`}>{item.alerts}</td>
                      <td className="p-2">
                        <button className="text-blue-500 hover:text-blue-700">Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Reagent Inventory</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "CBC Reagent Kit", level: "72%", color: "bg-green-500" },
                  { name: "Lipid Panel Reagents", level: "45%", color: "bg-yellow-500" },
                  { name: "Glucose Test Strips", level: "18%", color: "bg-red-500" },
                ].map((reagent, index) => (
                  <div key={index} className="border rounded-md p-3">
                    <div className="flex justify-between mb-1">
                      <span>{reagent.name}</span>
                      <span>{reagent.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${reagent.color} h-2 rounded-full`} 
                        style={{ width: reagent.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab Content */}
        {activeTab === "performance" && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Your Performance Metrics</h2>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="border rounded-md p-3 text-center">
                    <p className="text-gray-600 text-sm">{metric.name}</p>
                    <p className="text-xl font-bold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Turn-around Time (Hours)</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={[
                    {week: "Week 1", time: 26}, 
                    {week: "Week 2", time: 25}, 
                    {week: "Week 3", time: 24.5}, 
                    {week: "Week 4", time: 24.3}
                  ]}>
                    <XAxis dataKey="week" />
                    <YAxis domain={[23, 27]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="time" stroke="#3b82f6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Quality Control Scores</h2>
                <div className="space-y-4">
                  {[
                    { name: "Accuracy", score: 98, benchmark: 95 },
                    { name: "Precision", score: 96, benchmark: 90 },
                    { name: "Timeliness", score: 94, benchmark: 85 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span>{item.name}</span>
                        <span className="text-sm">{item.score}% (Benchmark: {item.benchmark}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 relative">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${item.score}%` }}
                        ></div>
                        <div 
                          className="absolute h-4 w-0.5 bg-red-500 top-1/2 transform -translate-y-1/2" 
                          style={{ left: `${item.benchmark}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Recent Feedback</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-3 py-2">
                  <p className="font-medium">Dr. Williams - Department Head</p>
                  <p className="text-sm text-gray-600">"Excellent work on maintaining high accuracy rates with the increased test volume."</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3 py-2">
                  <p className="font-medium">Lab Director</p>
                  <p className="text-sm text-gray-600">"Please continue to monitor quality control metrics for the new testing protocol."</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedStaffDashboard;