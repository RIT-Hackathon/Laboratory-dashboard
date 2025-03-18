import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const AuthPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role") || "customer"; // Default role to 'customer'

  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Signup & Login
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setError(""); // Clear error when switching modes
  }, [isSignUp]);

  // Backend API Base URL
  const API_BASE = "https://pd-an-painted-hollow.trycloudflare.com/api/auth";

  // Function to handle redirection based on user role
  const redirectToDashboard = (userRole) => {
    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "staff") {
      navigate("/staff-dashboard");
    } else {
      navigate("/customer-dashboard"); // Default role is 'customer'
    }
  };

  // Handle Login
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userRole = data.role || "customer"; // Fallback to 'customer'
        onLogin(userRole); // Pass role to App for state update
        redirectToDashboard(userRole);
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  // Handle Signup
  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_BASE}/register-patient`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Registration successful! Redirecting...");
        setTimeout(() => {
          onLogin("customer"); // New users default to customer
          redirectToDashboard("customer");
        }, 1500);
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {isSignUp ? "Sign Up" : "Login"} as {role.charAt(0).toUpperCase() + role.slice(1)}
        </h1>

        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-lg w-full"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-lg w-full"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="border px-4 py-2 rounded-lg w-full"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border px-4 py-2 rounded-lg w-full"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </>
          )}

          {isSignUp ? (
            <button
              onClick={handleSignup}
              className="w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition-all"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
            >
              Login
            </button>
          )}

          {!isSignUp ? (
            <button
              onClick={() => setIsSignUp(true)}
              className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transition-all"
            >
              Create an Account
            </button>
          ) : (
            <button
              onClick={() => setIsSignUp(false)}
              className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 transition-all"
            >
              Already have an account? Login
            </button>
          )}

          <button className="w-full flex items-center justify-center border border-gray-300 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition-all">
            <FcGoogle className="mr-2 text-2xl" /> Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
