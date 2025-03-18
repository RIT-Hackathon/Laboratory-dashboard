import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleContinue = (userType) => {
    navigate(`/login?role=${userType}`); // Pass role as query param
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Swasthya Lab</h1>
        <p className="text-gray-600 mb-6">Continue as:</p>

        <div className="space-y-4">
          <button
            onClick={() => handleContinue("staff")}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
          >
            Continue as Staff
          </button>

          <button
            onClick={() => handleContinue("admin")}
            className="w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition-all"
          >
            Continue as Admin
          </button>

          <button
            onClick={() => handleContinue("customer")}
            className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-600 transition-all"
          >
            Continue as Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
