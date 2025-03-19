import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ChartsSection = ({ pieData, colors }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Daily Appointments</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={[{ name: "Day 1", appointments: 5 }, { name: "Day 2", appointments: 10 }]}>
            <Line type="monotone" dataKey="appointments" stroke="#3b82f6" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Appointment Status</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsSection;
