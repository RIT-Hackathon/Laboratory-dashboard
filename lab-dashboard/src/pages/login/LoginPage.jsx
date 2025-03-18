import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role") || "staff"; // Default to staff if not provided

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setError(""); // Clear error when role changes
  }, [role]);

  const handleLogin = () => {
    if (
      (role === "staff" && credentials.username === "staffuser" && credentials.password === "staff123") ||
      (role === "admin" && credentials.username === "adminuser" && credentials.password === "admin123") ||
      (role === "customer" && credentials.username === "customeruser" && credentials.password === "customer123")
    ) {
      onLogin(role); // ✅ Set `isLoggedIn` to true
      const dashboardRoute = role === "staff" ? "/staff-dashboard" 
                            : role === "admin" ? "/admin-dashboard" 
                            : "/customer-dashboard";
      navigate(dashboardRoute);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {role.charAt(0).toUpperCase() + role.slice(1)} Login
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border px-4 py-2 rounded-lg w-full"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-lg w-full"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button 
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
          >
            Login
          </button>

          {/* Show Sign Up only for Admins */}
          {role === "admin" && (
            <button 
              onClick={() => navigate("/signup")}
              className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transition-all"
            >
              Sign Up as Admin
            </button>
          )}

          <button 
            className="w-full flex items-center justify-center border border-gray-300 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition-all"
          >
            <FcGoogle className="mr-2 text-2xl" /> Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
