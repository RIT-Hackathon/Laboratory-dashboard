import { useState } from "react";

const AppointmentFilters = () => {
  const [status, setStatus] = useState("all");

  return (
    <div className="mb-4 flex flex-wrap gap-4 items-center">
      <select
        className="border border-gray-300 text-gray-700 bg-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">All Appointments</option>
        <option value="upcoming">Upcoming</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>

      {/* Future Enhancement Placeholder */}
      {/* <input
        type="date"
        className="border border-gray-300 text-gray-700 bg-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> */}
    </div>
  );
};

export default AppointmentFilters;
