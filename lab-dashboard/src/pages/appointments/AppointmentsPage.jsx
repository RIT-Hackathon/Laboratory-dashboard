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
          method: "PATCH", 
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

  // Helper function to get status badge style
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "CONFIRMED":
        return "bg-blue-100 text-blue-800";
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "REPORT_GENERATED":
        return "bg-purple-100 text-purple-800";
      case "HOME":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Appointments</h2>
        <div className="text-sm text-gray-500">
          Total: {appointments.length} {selectedStatus.toLowerCase()} appointments
        </div>
      </div>

      {/* Status Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-8">
            {STATUS_OPTIONS.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedStatus === status
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } transition-colors duration-150 ease-in-out`}
              >
                {status.replace(/_/g, " ")}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      ) : appointments.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments found</h3>
          <p className="mt-1 text-sm text-gray-500">There are no {selectedStatus.toLowerCase()} appointments at this time.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 hidden md:block">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{appt.patientName}</h3>
                    <div className="flex flex-wrap items-center mt-1 space-x-2">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-600">{formatDate(appt.date)}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(appt.status)}`}>
                        {appt.status}
                      </span>
                      {appt.homeAppointment && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          🏠 Home Visit
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div className="mt-4 md:mt-0 flex items-center space-x-2">
                  {selectedStatus === "PENDING" ? (
                    <button
                      onClick={() => confirmAppointment(appt.id)}
                      className={`px-4 py-2 rounded-md font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        confirming[appt.id]
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={confirming[appt.id]}
                    >
                      {confirming[appt.id] ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Confirming...
                        </span>
                      ) : (
                        "Confirm Appointment"
                      )}
                    </button>
                  ) : appt.homeAppointment ? (
                    selectedStatus === "CONFIRMED" ? (
                      <div className="flex items-center text-sm text-green-700 font-medium px-3 py-2 bg-green-50 rounded-md">
                        <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Assigned for Home Visit
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <select
                          value={selectedStaff[appt.id] || ""}
                          onChange={(e) =>
                            setSelectedStaff((prev) => ({
                              ...prev,
                              [appt.id]: e.target.value,
                            }))
                          }
                          className="block w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                          className={`w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                            assigning[appt.id]
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={assigning[appt.id]}
                        >
                          {assigning[appt.id] ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Assigning...
                            </span>
                          ) : (
                            "Assign Staff"
                          )}
                        </button>
                      </div>
                    )
                  ) : (
                    <span className="inline-flex items-center px-3 py-2 rounded-md text-sm text-gray-700 bg-gray-100">
                      <svg className="h-5 w-5 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Regular Appointment
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;