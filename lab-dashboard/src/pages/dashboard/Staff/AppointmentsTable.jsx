import React from "react";

const AppointmentsTable = ({ appointments }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="p-2">Patient</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((apt) => (
            <tr key={apt.id} className="border-b hover:bg-gray-100 transition-all">
              <td className="p-2">{apt.name}</td>
              <td className="p-2">{apt.date}</td>
              <td className="p-2">{apt.time}</td>
              <td className={`p-2 ${apt.status === "Confirmed" ? "text-green-600" : "text-yellow-500"}`}>{apt.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
