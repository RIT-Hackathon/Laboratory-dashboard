import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import AuthButtons from "./AuthButtons";

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
  const API_BASE = "http://localhost:8000/api/auth/register-patient";

  // Redirect to dashboard based on user role
  const redirectToDashboard = (userRole) => {
    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "staff") {
      navigate("/staff-dashboard");
    } else {
      navigate("/customer-dashboard"); // Default to customer
    }
  };

  // Handle Login
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userRole = data.role || "customer";
        onLogin(userRole);
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
      const response = await fetch(`${API_BASE}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setSuccessMessage("Registration successful! Redirecting...");
        setTimeout(() => {
          onLogin("customer"); // Default new user role
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

        {/* Form Component */}
        <AuthForm isSignUp={isSignUp} user={user} setUser={setUser} />

        {/* Buttons Component */}
        <AuthButtons
          isSignUp={isSignUp}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          setIsSignUp={setIsSignUp}
        />
      </div>
    </div>
  );
};

export default AuthPage;
