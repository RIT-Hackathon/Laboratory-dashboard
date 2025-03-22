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
    if (role === "admin") {
      navigate(`/admin-dashboard/${userId}`); // ✅ Dynamic Admin Redirect
    } else if (userRole === "staff") {
      navigate("/staff-dashboard");
    } else {
      navigate(`/patient-dashboard/${userId}`); // ✅ Dynamic Patient Redirect
    }
  };
  
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE}/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.data.user)); // ✅ Store user info in localStorage
        console.log(data.data.user);
        const { id, role } = data.data.user; // Extract userId and role
        onLogin(role);  
        redirectToDashboard(role, id); // ✅ Redirect based on role
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

  // Get role-specific colors
  const getRoleColor = () => {
    switch (role) {
      case "admin":
        return "from-indigo-600 to-purple-600";
      case "staff":
        return "from-green-600 to-teal-600";
      default: // patient
        return "from-blue-600 to-sky-500";
    }
  };

  // Get role icon
  const getRoleIcon = () => {
    switch (role) {
      case "admin":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "staff":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      default: // patient
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Card with enhanced design */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${getRoleColor()} px-6 py-8 text-center`}>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
              {getRoleIcon()}
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="mt-2 text-white/80">
              {isSignUp 
                ? `Sign up as ${role.charAt(0).toUpperCase() + role.slice(1)}` 
                : `Login to your ${role.charAt(0).toUpperCase() + role.slice(1)} account`}
            </p>
          </div>
          
          {/* Main content */}
          <div className="px-6 py-8">
            {/* Error & Success Messages */}
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            {successMessage && (
              <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">{successMessage}</p>
                  </div>
                </div>
              </div>
            )}

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
            
            {/* Additional help text */}
            <p className="mt-6 text-center text-sm text-gray-500">
              {isSignUp 
                ? "Already have an account?" 
                : "Don't have an account yet?"}{" "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className={`font-medium focus:outline-none transition-colors duration-200 ${
                  role === "admin" 
                    ? "text-indigo-600 hover:text-indigo-800" 
                    : role === "staff" 
                      ? "text-green-600 hover:text-green-800" 
                      : "text-blue-600 hover:text-blue-800"
                }`}
              >
                {isSignUp ? "Sign in" : "Create account"}
              </button>
            </p>
          </div>
        </div>
        
        {/* Footer note */}
        <p className="text-center text-xs text-gray-500">
          Protected by industry-standard security protocols
        </p>
      </div>
    </div>
  );
};

export default AuthPage;