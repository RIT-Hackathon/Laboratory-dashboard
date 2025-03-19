import { Calendar, FileText, User } from "lucide-react";

const DashboardTab = ({ userProfile }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome, {userProfile?.name}!</h2>
        <p className="opacity-80">Your health is our priority. Here's your personalized dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard icon={<Calendar className="text-blue-700" />} title="Book Appointment" desc="Schedule your next visit" />
        <DashboardCard icon={<FileText className="text-green-700" />} title="View Reports" desc="Access your medical records" />
        <DashboardCard icon={<User className="text-purple-700" />} title="Update Profile" desc="Keep your info current" />
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center">
    {icon}
    <div className="ml-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

export default DashboardTab;
