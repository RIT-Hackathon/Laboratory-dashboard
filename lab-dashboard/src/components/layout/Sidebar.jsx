import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Calendar, Users, ClipboardList, LogOut, LogIn } from "lucide-react";

const Sidebar = ({ isLoggedIn, onLogout, role }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/{role}-dashboard", icon: <Home size={20} /> },
    { name: "Appointments", path: "/appointments", icon: <ClipboardList size={20} /> },
  ];

  const privateItems = [
    { name: "Staff", path: "/staff", icon: <Users size={20} /> },
    { name: "Patients", path: "/patients", icon: <Calendar size={20} /> },
  ];

  const handleLoginRedirect = () => navigate("/login");

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-white to-gray-100 shadow-2xl border-r flex flex-col p-6 space-y-6">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-blue-800 text-2xl font-bold">
        🏥 <h1>Swasthya Lab</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
              location.pathname === item.path ? "bg-blue-600 text-white shadow-xl" : "text-gray-700 bg-white shadow-md"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}

        {/* Private Links */}
        {isLoggedIn && (
          <>
            <p className="text-gray-500 text-sm font-semibold mt-4 mb-2">MANAGEMENT</p>
            {privateItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                  location.pathname === item.path ? "bg-blue-600 text-white shadow-xl" : "text-gray-700 bg-white shadow-md"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </>
        )}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-2 p-3 rounded-lg text-red-500 hover:bg-red-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        ) : (
          <button
            onClick={handleLoginRedirect}
            className="w-full flex items-center space-x-2 p-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <LogIn size={20} />
            <span>Login</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
