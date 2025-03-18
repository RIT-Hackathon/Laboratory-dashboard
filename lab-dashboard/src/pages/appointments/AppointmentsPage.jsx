import React, { useState } from "react";
import { CheckCircle, Calendar, Clock, Trash2, Edit, Save, XCircle } from "lucide-react";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", testName: "Blood Test", date: "2025-03-20", time: "10:00", contact: "johndoe@example.com" },
    { id: 2, patientName: "Jane Smith", testName: "X-Ray", date: "2025-03-21", time: "14:30", contact: "janesmith@example.com" },
  ]);
  const [rescheduleId, setRescheduleId] = useState(null);
  const [newSchedule, setNewSchedule] = useState({ date: "", time: "" });

  // Accept Appointment
  const handleAccept = (id, patientName, contact) => {
    alert(`Appointment for ${patientName} successfully confirmed!\nNotification sent to ${contact}`);
  };

  // Open Reschedule Popup
  const handleReschedule = (id) => {
    setRescheduleId(id);
  };

  // Close Reschedule Popup
  const closeReschedule = () => {
    setRescheduleId(null);
    setNewSchedule({ date: "", time: "" });
  };

  // Save New Schedule
  const saveReschedule = () => {
    setAppointments(appointments.map((appt) => appt.id === rescheduleId ? { ...appt, ...newSchedule } : appt));
    closeReschedule();
  };

  // Delete Appointment
  const handleDelete = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 flex flex-col items-center relative">
      <h2 className="text-4xl font-extrabold text-blue-700 drop-shadow-lg mb-6">Appointments</h2>

      {/* Appointment Table */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-4xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Patient</th>
              <th className="p-3">Test</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b hover:bg-gray-100 transition">
                <td className="p-3 font-medium">{appt.patientName}</td>
                <td className="p-3 text-blue-600">{appt.testName}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3 text-center flex justify-center gap-4">
                  <button onClick={() => handleAccept(appt.id, appt.patientName, appt.contact)}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 flex items-center gap-1">
                    <CheckCircle size={16} /> Accept
                  </button>
                  <button onClick={() => handleReschedule(appt.id)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-yellow-600 flex items-center gap-1">
                    <Clock size={16} /> Reschedule
                  </button>
                  <button onClick={() => handleDelete(appt.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-red-600 flex items-center gap-1">
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reschedule Popup */}
      {rescheduleId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-xl font-bold mb-4">Reschedule Appointment</h2>
            <input
              type="date"
              className="border px-3 py-2 rounded w-full mb-3"
              value={newSchedule.date}
              onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
            />
            <input
              type="time"
              className="border px-3 py-2 rounded w-full mb-3"
              value={newSchedule.time}
              onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
            />
            <div className="flex justify-end gap-4">
              <button onClick={saveReschedule} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
              <button onClick={closeReschedule} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
