import { Bell } from "lucide-react";

const Header = ({ userProfile }) => {
  return (
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
  );
};

export default Header;
