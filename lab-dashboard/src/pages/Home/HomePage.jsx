import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleContinue = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 p-6">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content container with z-index to appear above background */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        {/* Logo */}
        <div className="mb-4">
          <div className="w-24 h-24 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>
        
        {/* Title with glassmorphism effect */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl px-8 py-4 mb-10 shadow-lg border border-white/50">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
            Swasthya Lab
          </h1>
          <p className="mt-2 text-gray-700 text-center font-medium">Advanced Diagnostics & Healthcare</p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Admin Card */}
          <div
            onClick={() => handleContinue("admin")}
            className="group cursor-pointer relative bg-white/60 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-2xl group-hover:bg-indigo-400/20 transition-all duration-300"></div>
            
            <div className="p-8 relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-indigo-800 group-hover:text-indigo-600 transition-colors duration-300 text-center">
                Laboratory Admin
              </h2>
              <p className="text-gray-600 mt-2 text-center">Manage tests, staff & operations</p>
              
              <div className="mt-6 flex justify-center">
                <div className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium group-hover:bg-indigo-100 transition-colors duration-300 flex items-center">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Card */}
          <div
            onClick={() => handleContinue("patient")}
            className="group cursor-pointer relative bg-white/60 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-2xl group-hover:bg-purple-400/20 transition-all duration-300"></div>
            
            <div className="p-8 relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-purple-800 group-hover:text-purple-600 transition-colors duration-300 text-center">
                Patient Portal
              </h2>
              <p className="text-gray-600 mt-2 text-center">Book appointments & access reports</p>
              
              <div className="mt-6 flex justify-center">
                <div className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium group-hover:bg-purple-100 transition-colors duration-300 flex items-center">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Swasthya Lab. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-1">Providing quality healthcare diagnostics since 2020</p>
        </div>
      </div>
    </div>
  );
};

// Add this to your CSS or in a style tag
const styleSheet = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`;

export default HomePage;