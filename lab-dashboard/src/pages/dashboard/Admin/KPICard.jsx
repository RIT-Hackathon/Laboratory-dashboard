import React from "react";

const KPICard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 border-b-4 border-blue-500">
      <div className="text-blue-500 text-3xl">{icon}</div>
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default KPICard;
