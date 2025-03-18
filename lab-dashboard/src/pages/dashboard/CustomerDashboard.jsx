import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  FileText, 
  Download, 
  User, 
  LogOut, 
  Clock, 
  HelpCircle, 
  Bell, 
  BookOpen 
} from "lucide-react";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    // Clear authentication state (if stored in context or localStorage)
    navigate("/login"); // Redirect to login page
  };

  // Mock data for reports
  const reports = [
    { id: 1, name: "Blood Test Results", date: "2025-03-15", downloadable: true },
    { id: 2, name: "X-Ray Report", date: "2025-03-10", downloadable: true },
    { id: 3, name: "Medical Certificate", date: "2025-02-28", downloadable: true },
  ];

  // Mock data for platform usage history
  const usageHistory = [
    { id: 1, activity: "Booked appointment with Dr. Sharma", date: "2025-03-17 14:30" },
    { id: 2, activity: "Downloaded Blood Test Results", date: "2025-03-15 10:15" },
    { id: 3, activity: "Updated personal information", date: "2025-03-12 09:45" },
    { id: 4, activity: "Viewed medical records", date: "2025-03-08 16:20" },
  ];

  // Mock data for user profile
  const [userProfile, setUserProfile] = useState({
    name: "Rahul Patel",
    email: "rahul.patel@example.com",
    phone: "+91 98765 43210",
    address: "123 Main Street, Bangalore",
    dateOfBirth: "1990-05-15",
    bloodGroup: "O+",
    allergies: "None",
    emergencyContact: "Priya Patel - +91 98700 43210",
  });

  const handleProfileChange = (field, value) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleProfileSave = () => {
    // In a real application, this would save to a database
    alert("Profile updated successfully!");
  };

  const downloadReport = (reportId) => {
    // In a real application, this would trigger a download
    alert(`Downloading report #${reportId}`);
  };

  // Platform guide steps
  const guideSteps = [
    {
      title: "Book Appointments",
      description: "Click on the Calendar icon or 'Book Appointment' button to schedule your next visit.",
      icon: <Calendar className="w-10 h-10 text-blue-500" />
    },
    {
      title: "View Medical Reports",
      description: "Access all your medical reports from the Reports tab. You can download them for offline viewing.",
      icon: <FileText className="w-10 h-10 text-green-500" />
    },
    {
      title: "Update Profile",
      description: "Keep your personal information up to date through the Profile section.",
      icon: <User className="w-10 h-10 text-purple-500" />
    },
    {
      title: "Track History",
      description: "View your platform usage history to keep track of your activities.",
      icon: <Clock className="w-10 h-10 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with welcome message and notifications */}
      <div className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800">HealthConnect</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Bell size={20} />
            </button>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">
                {userProfile.name.charAt(0)}
              </div>
              <span className="font-medium">{userProfile.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-4">
        {/* Tab navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`py-3 px-6 font-medium ${
              activeTab === "dashboard"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`py-3 px-6 font-medium ${
              activeTab === "reports"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Reports
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`py-3 px-6 font-medium ${
              activeTab === "history"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`py-3 px-6 font-medium ${
              activeTab === "profile"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("guide")}
            className={`py-3 px-6 font-medium ${
              activeTab === "guide"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Platform Guide
          </button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Welcome, {userProfile.name}!</h2>
              <p className="opacity-80">
                Your health is our priority. Here's your personalized dashboard.
              </p>
              <button 
                onClick={() => setActiveTab("guide")}
                className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-all flex items-center"
              >
                <HelpCircle size={18} className="mr-2" />
                How to use this platform
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Calendar className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold">Book Appointment</h3>
                  <p className="text-sm text-gray-600">Schedule your next visit</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FileText className="text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold">View Reports</h3>
                  <p className="text-sm text-gray-600">Access your medical records</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <User className="text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold">Update Profile</h3>
                  <p className="text-sm text-gray-600">Keep your info current</p>
                </div>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="mr-2 text-blue-600" size={20} />
                Upcoming Appointments
              </h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Checkup with Dr. Sharma</h3>
                      <p className="text-sm text-gray-600">March 22, 10:00 AM</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Reschedule
                    </button>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Blood Test</h3>
                      <p className="text-sm text-gray-600">March 24, 2:00 PM</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Reschedule
                    </button>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Consultation</h3>
                      <p className="text-sm text-gray-600">March 30, 5:00 PM</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all">
                Book New Appointment
              </button>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FileText className="mr-2 text-green-600" size={20} />
              Medical Reports
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 font-medium">Report Name</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reports.map((report) => (
                    <tr key={report.id}>
                      <td className="p-4">{report.name}</td>
                      <td className="p-4">{report.date}</td>
                      <td className="p-4">
                        {report.downloadable ? (
                          <button
                            onClick={() => downloadReport(report.id)}
                            className="flex items-center text-green-600 hover:text-green-800"
                          >
                            <Download size={16} className="mr-1" /> Download
                          </button>
                        ) : (
                          <span className="text-gray-400">Not available</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Need help understanding your reports? Schedule a consultation with your doctor.
            </p>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Clock className="mr-2 text-orange-600" size={20} />
              Platform Usage History
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
              <div className="space-y-6 relative">
                {usageHistory.map((item) => (
                  <div key={item.id} className="ml-8 relative">
                    <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium">{item.activity}</p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <User className="mr-2 text-purple-600" size={20} />
              Your Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={userProfile.name}
                    onChange={(e) => handleProfileChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    value={userProfile.email}
                    onChange={(e) => handleProfileChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    value={userProfile.phone}
                    onChange={(e) => handleProfileChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    value={userProfile.address}
                    onChange={(e) => handleProfileChange("address", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={userProfile.dateOfBirth}
                    onChange={(e) => handleProfileChange("dateOfBirth", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Group
                  </label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={userProfile.bloodGroup}
                    onChange={(e) => handleProfileChange("bloodGroup", e.target.value)}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Allergies
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={userProfile.allergies}
                    onChange={(e) => handleProfileChange("allergies", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={userProfile.emergencyContact}
                    onChange={(e) => handleProfileChange("emergencyContact", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleProfileSave}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Platform Guide Tab */}
        {activeTab === "guide" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <BookOpen className="mr-2 text-blue-600" size={20} />
              Platform Guide
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to HealthConnect! This guide will help you navigate through our platform and make the most of your experience.
            </p>
            
            <div className="space-y-8">
              {guideSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Need Help?</h3>
              <p className="text-gray-600">
                If you have any questions or need assistance, please contact our support team at support@healthconnect.com or call us at +91 1800 123 4567.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-600 text-sm">
          <p>© 2025 HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;