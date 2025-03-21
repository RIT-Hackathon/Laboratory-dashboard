import React, { useEffect, useState } from "react";

// Static Lab Info
const labHeadId = "3e5b971e-5cd4-4f48-ba5b-f564c7fcddcd";
const labId = "007e5c76-f89d-4704-9c0f-6c3c1fb1a184";

const STATUS_OPTIONS = [
  "PENDING",
  "CONFIRMED",
  "COMPLETED",
  "REPORT_GENERATED",
  "HOME",
];

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("PENDING");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [staffList, setStaffList] = useState([]);
  const [assigning, setAssigning] = useState({});
  const [selectedStaff, setSelectedStaff] = useState({});
  const [confirming, setConfirming] = useState({});

  const fetchAppointments = async () => {
    setLoading(true);
    setError("");
    try {
      const queryParams = new URLSearchParams({
        status: selectedStatus,
        labId,
      }).toString();

      const response = await fetch(
        `http://localhost:8000/api/appointments/status?${queryParams}`
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server Error: ${response.status} - ${text}`);
      }

      const data = await response.json();
      setAppointments(data.data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
      setError("Failed to fetch appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchStaffList = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/lab-assistant/assistants",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            labId,
            headId: labHeadId,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setStaffList(data.data);
      } else {
        console.error("Error fetching staff:", data.message);
      }
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  const assignHomeAppointment = async (appointmentId) => {
    const assistantId = selectedStaff[appointmentId];
    if (!assistantId) {
      alert("Please select a staff member.");
      return;
    }

    setAssigning((prev) => ({ ...prev, [appointmentId]: true }));
    try {
      const response = await fetch(
        "http://localhost:8000/api/appointments/assign-home",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appointmentId,
            assistantId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Error assigning appointment:", data.message);
        alert(data.message || "Failed to assign appointment.");
      } else {
        alert("Appointment assigned successfully!");
        fetchAppointments();
      }
    } catch (error) {
      console.error("Error assigning appointment:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setAssigning((prev) => ({ ...prev, [appointmentId]: false }));
    }
  };

  const confirmAppointment = async (appointmentId) => {
    setConfirming((prev) => ({ ...prev, [appointmentId]: true }));
    try {
      const response = await fetch(
        "http://localhost:8000/api/appointments/confirm",
        {
          method: "PATCH", // Corrected to PATCH
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ appointmentId }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Error confirming appointment:", data.message);
        alert(data.message || "Failed to confirm appointment.");
      } else {
        alert("Appointment confirmed!");
        fetchAppointments();
      }
    } catch (error) {
      console.error("Error confirming appointment:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setConfirming((prev) => ({ ...prev, [appointmentId]: false }));
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [selectedStatus]);

  useEffect(() => {
    fetchStaffList();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>

      {/* Status Tabs */}
      <div className="flex space-x-2 mb-4">
        {STATUS_OPTIONS.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded ${
              selectedStatus === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white p-4 rounded shadow border flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{appt.patientName}</h3>
                <p className="text-gray-600 text-sm">
                  {new Date(appt.date).toLocaleString()}
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  Status: {appt.status}
                </p>

                {appt.homeAppointment && selectedStatus !== "PENDING" && (
                  <p className="text-green-600 text-sm mt-1 font-medium">
                    🏠 Home Appointment
                  </p>
                )}
              </div>

              {/* Action Section */}
              <div className="mt-3 md:mt-0 flex items-center space-x-2">
                {selectedStatus === "PENDING" ? (
                  <button
                    onClick={() => confirmAppointment(appt.id)}
                    className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${
                      confirming[appt.id]
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={confirming[appt.id]}
                  >
                    {confirming[appt.id] ? "Confirming..." : "Confirm"}
                  </button>
                ) : appt.homeAppointment ? (
                  selectedStatus === "CONFIRMED" ? (
                    <p className="text-sm text-green-700 font-medium">
                      Assigned for Home Visit ✅
                    </p>
                  ) : (
                    <>
                      <select
                        value={selectedStaff[appt.id] || ""}
                        onChange={(e) =>
                          setSelectedStaff((prev) => ({
                            ...prev,
                            [appt.id]: e.target.value,
                          }))
                        }
                        className="border rounded px-3 py-2"
                      >
                        <option value="">Select Staff</option>
                        {staffList.map((staff) => (
                          <option key={staff.id} value={staff.id}>
                            {staff.name}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={() => assignHomeAppointment(appt.id)}
                        className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ${
                          assigning[appt.id]
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={assigning[appt.id]}
                      >
                        {assigning[appt.id] ? "Assigning..." : "Assign"}
                      </button>
                    </>
                  )
                ) : (
                  <p className="text-sm text-gray-500 italic">
                    No home assignment
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
