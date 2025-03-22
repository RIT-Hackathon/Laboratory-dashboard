import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CustomerDashboard = () => {
  const { patientId } = useParams();
  const [appointments, setAppointments] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch Appointments
  const fetchAppointments = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/patient/appointments?patientId=${patientId}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to load appointments");
      setAppointments(data.data);
    } catch (err) {
      console.error("❌ Error fetching appointments:", err);
      setError("Failed to load appointments.");
    }
  };

  // ✅ Fetch Documents
  const fetchDocuments = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/patient/document?userId=${patientId}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to load documents");
      setDocuments(data.data.data); // Nested array
    } catch (err) {
      console.error("❌ Error fetching documents:", err);
      // Optional, don't set error
    }
  };

  // ✅ View Document Button
  const handleViewDocument = (mediaUrl) => {
    if (!mediaUrl) {
      alert("No document URL available.");
      return;
    }
    window.open(mediaUrl, "_blank");
  };

  // ✅ Initial Fetch
  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([fetchAppointments(), fetchDocuments()]);
      setLoading(false);
    };
    fetchAll();
  }, [patientId]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">{error}</div>;
  }

  return (
    <div className="p-6">
      {/* ---------------------- */}
      {/* Appointments Section */}
      {/* ---------------------- */}
      <h1 className="text-2xl font-bold mb-4">Your Appointment History</h1>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="overflow-x-auto mb-8">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Lab Name</th>
                <th className="px-4 py-2 border">Scheduled At</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Test Type</th>
                <th className="px-4 py-2 border">Home Appointment</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="text-center">
                  <td className="px-4 py-2 border">{appt.labName}</td>
                  <td className="px-4 py-2 border">
                    {new Date(appt.scheduledAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border capitalize">{appt.status}</td>
                  <td className="px-4 py-2 border">{appt.testType}</td>
                  <td className="px-4 py-2 border">
                    {appt.homeAppointment ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ---------------------- */}
      {/* Documents Section */}
      {/* ---------------------- */}
      <h2 className="text-2xl font-bold mb-4">Your Document History</h2>

      {documents.length === 0 ? (
        <p>No documents found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Report Type</th>
                <th className="px-4 py-2 border">Uploaded At</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="text-center">
                  <td className="px-4 py-2 border">{doc.reportType}</td>
                  <td className="px-4 py-2 border">
                    {new Date(doc.uploadedAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleViewDocument(doc.mediaId)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    >
                      View Document
                    </button>
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

export default CustomerDashboard;
