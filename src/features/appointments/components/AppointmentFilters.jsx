import { useState } from "react";

const AppointmentFilters = () => {
  const [status, setStatus] = useState("all");

  return (
    <div className="mb-4 flex flex-wrap gap-4">
      <select
        className="bg-gray-800 text-white p-2 rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">All Appointments</option>
        <option value="upcoming">Upcoming</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
      {/* Add date filters or search bar if needed */}
    </div>
  );
};

export default AppointmentFilters;
