import React from "react";

const AuthButtons = ({ isSignUp, handleLogin, handleSignup, setIsSignUp, role }) => {
  // Get role-specific button styling
  const getButtonStyle = () => {
    switch (role) {
      case "admin":
        return "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700";
      case "staff":
        return "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700";
      default: // patient
        return "bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600";
    }
  };

  const primaryButtonClasses = `w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${getButtonStyle()} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`;
  
  const secondaryButtonClasses = "w-full mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200";

  return (
    <div className="mt-6">
      {isSignUp ? (
        <button
          type="button"
          onClick={handleSignup}
          className={primaryButtonClasses}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Create Account
        </button>
      ) : (
        <button
          type="button"
          onClick={handleLogin}
          className={primaryButtonClasses}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Sign In
        </button>
      )}
    </div>
  );
};

export default AuthButtons;