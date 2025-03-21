import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleContinue = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 drop-shadow-lg">Welcome to Swasthya Lab</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Updated grid-cols to 2 */}
        {/* Admin Card */}
        <div
          onClick={() => handleContinue("admin")}
          className="group cursor-pointer relative bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 text-center transition-all duration-300 transform perspective-1000 hover:scale-105 hover:-translate-y-2 hover:shadow-3xl"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-green-400/30 rounded-full blur-2xl opacity-50"></div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Admin</h2>
          <p className="text-gray-600 mt-2">Manage Lab Operations</p>
        </div>

        {/* Patient Card */}
        <div
          onClick={() => handleContinue("patient")}
          className="group cursor-pointer relative bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 text-center transition-all duration-300 transform perspective-1000 hover:scale-105 hover:-translate-y-2 hover:shadow-3xl"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-purple-400/30 rounded-full blur-2xl opacity-50"></div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Patient</h2>
          <p className="text-gray-600 mt-2">Book Appointments & View Reports</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;