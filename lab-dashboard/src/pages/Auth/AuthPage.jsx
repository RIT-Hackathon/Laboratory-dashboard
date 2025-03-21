import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import AuthButtons from "./AuthButtons";

const AuthPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role") || "patient"; // Default role

  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState({ email: "", password: "", name: "", phone: "", labName: "", labAddress: "", testTypes: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setError("");
    setSuccessMessage("");
  }, [isSignUp]);

  const API_BASE = "http://localhost:8000/api/auth";

  // ✅ Modified redirectToDashboard to accept dynamic userId
  const redirectToDashboard = (userRole, userId = "") => {
    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "staff") {
      navigate("/staff-dashboard");
    } else {
      navigate(`/patient-dashboard/${userId}`); // Dynamic redirection for patient
    }
  };

  // ✅ Handle user login with userId stored and used in redirection
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE}/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data)); // Store user data
        const loggedInUserId = data.data.user.id;  // ✅ Get userId from API
        setUserId(loggedInUserId);  // Save in state if needed elsewhere
        onLogin(data.role);  // Use role from API response
        redirectToDashboard(data.role, loggedInUserId);  // ✅ Redirect with userId
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  // Handle user signup
  const handleSignup = async () => {
    if (role === "staff") {
      setError("Staff registration is not allowed.");
      return;
    }

    const formattedUser = {
      ...user,
      testTypes: Array.isArray(user.testTypes) 
        ? user.testTypes 
        : user.testTypes.split(",").map((type) => type.trim()), // Convert string to array
    };

    const endpoint = role === "admin" ? `${API_BASE}/register-lab` : `${API_BASE}/register-patient`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedUser),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.data.user.id);
        const newUserId = data.data.user.id;
        setUserId(newUserId);
        setSuccessMessage("Registration successful! Redirecting...");
        setTimeout(() => {
          onLogin(role);
          redirectToDashboard(role, newUserId);  // ✅ Redirect with userId
        }, 1500);
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 max-w-md w-full text-center border border-white/30">
        
        {/* Floating Glow Effect */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl opacity-50"></div>

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-back drop-shadow-md">
          {isSignUp ? "Sign Up" : "Login"} as {role.charAt(0).toUpperCase() + role.slice(1)}
        </h1>

        {/* Error & Success Messages */}
        {error && <p className="text-red-500 font-medium mt-3">{error}</p>}
        {successMessage && <p className="text-green-500 font-medium mt-3">{successMessage}</p>}

        {/* Form Component */}
        <AuthForm isSignUp={isSignUp} user={user} setUser={setUser} role={role} />

        {/* Buttons Component */}
        <AuthButtons
          isSignUp={isSignUp}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          setIsSignUp={setIsSignUp}
          role={role}
        />
      </div>
    </div>
  );
};

export default AuthPage;
