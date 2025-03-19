import { Calendar, FileText, User } from "lucide-react";

const DashboardTab = ({ userProfile, setActiveTab }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome, {userProfile.name}!</h2>
        <p className="opacity-80">Your health is our priority. Here's your personalized dashboard.</p>
        <button 
          onClick={() => setActiveTab("guide")}
          className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-all"
        >
          How to use this platform
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <Calendar className="text-blue-700" />
          <div className="ml-4">
            <h3 className="font-semibold">Book Appointment</h3>
            <p className="text-sm text-gray-600">Schedule your next visit</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <FileText className="text-green-700" />
          <div className="ml-4">
            <h3 className="font-semibold">View Reports</h3>
            <p className="text-sm text-gray-600">Access your medical records</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <User className="text-purple-700" />
          <div className="ml-4">
            <h3 className="font-semibold">Update Profile</h3>
            <p className="text-sm text-gray-600">Keep your info current</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;