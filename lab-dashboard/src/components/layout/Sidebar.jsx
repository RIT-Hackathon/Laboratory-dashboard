import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, ClipboardList, LogOut, LogIn } from "lucide-react";

const Sidebar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setRole(user.role);
      setUserId(user.id);
    } else {
      setRole(null);
      setUserId(null);
    }
  }, [isLoggedIn]);

  const dashboardPath =
    role === "LAB_HEAD"
      ? `/admin-dashboard/${userId}`
      : `/patient-dashboard/${userId}`;
  // console.log(role);
  const menuItems = [
    { name: "Dashboard", path: dashboardPath, icon: <Home size={20} /> },
  ];

  if (role !== "PATIENT") {
    menuItems.push({
      name: "Appointments",
      path: "/appointments",
      icon: <ClipboardList size={20} />,
    });
  }

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-white to-gray-100 shadow-2xl border-r flex flex-col p-6 space-y-6">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-blue-800 text-2xl font-bold">
        🏥 <h1>Swasthya Lab</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
              location.pathname === item.path
                ? "bg-blue-600 text-white shadow-xl"
                : "text-gray-700 bg-white shadow-md"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout/Login */}
      <div className="mt-auto">
        {isLoggedIn ? (
          <button
            onClick={() => {
              localStorage.removeItem("user");
              onLogout(); // update state in App
              navigate("/"); // ✅ Navigate to home after logout
            }}
            className="w-full flex items-center space-x-2 p-3 rounded-lg text-red-500 hover:bg-red-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
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
