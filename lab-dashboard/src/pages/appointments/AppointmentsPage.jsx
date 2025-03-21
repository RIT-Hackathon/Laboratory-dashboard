import React, { useEffect, useState } from 'react';

// Hardcoded labId for now (replace with dynamic value if needed)
const LAB_ID = '007e5c76-f89d-4704-9c0f-6c3c1fb1a184';

const STATUS_OPTIONS = ['PENDING', 'CONFIRMED', 'COMPLETED', 'REPORT_GENERATED', 'HOME'];

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('PENDING');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAppointments = async () => {
    setLoading(true);
    setError('');
    try {
      const queryParams = new URLSearchParams({
        status: selectedStatus,
        labId: LAB_ID,
      }).toString();

      const response = await fetch(`http://localhost:8000/api/appointments/status?${queryParams}`);

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server Error: ${response.status} - ${text}`);
      }

      const data = await response.json();
      setAppointments(data.data);  // ✅ FIX: set data.data instead of data
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setError('Failed to fetch appointments. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [selectedStatus]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>

      <div className="flex space-x-2 mb-4">
        {STATUS_OPTIONS.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded ${
              selectedStatus === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found for status: {selectedStatus}</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Test Type</th>
              <th className="py-2 px-4 border-b">Home Appointment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{appointment.id}</td>
                <td className="py-2 px-4 border-b">{appointment.status}</td>
                <td className="py-2 px-4 border-b">{appointment.testType}</td>
                <td className="py-2 px-4 border-b">
                  {appointment.homeAppointment ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentsPage;
