import { useEffect, useState } from "react";
import axios from "axios";

const AppointmentsTab = ({ patientId }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.post("/api/patient/appointments", { patientId });
        setAppointments(res.data.data);
      } catch (err) {
        console.error("Failed to fetch appointments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [patientId]);

  const handleViewDocument = async (path) => {
    try {
      const res = await axios.post("/api/patient/document", { path });
      const url = res.data.data.url;
      window.open(url, "_blank");
    } catch (err) {
      console.error("Failed to get document URL:", err);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading appointments...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2">Lab</th>
                <th className="px-4 py-2">Scheduled At</th>
                <th className="px-4 py-2">Test Type</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Home Appointment</th>
                <th className="px-4 py-2">Report</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td className="px-4 py-2">{appt.labName}</td>
                  <td className="px-4 py-2">
                    {new Date(appt.scheduledAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">{appt.testType}</td>
                  <td className="px-4 py-2">{appt.status}</td>
                  <td className="px-4 py-2">{appt.homeAppointment ? "Yes" : "No"}</td>
                  <td className="px-4 py-2">
                    {appt.documentPath ? (
                      <button
                        onClick={() => handleViewDocument(appt.documentPath)}
                        className="text-blue-600 hover:underline"
                      >
                        View Report
                      </button>
                    ) : (
                      <span className="text-gray-400">Not Available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppointmentsTab;
