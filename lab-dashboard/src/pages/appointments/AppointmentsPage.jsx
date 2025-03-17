import React, { useState } from 'react';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      testName: 'Blood Test',
      date: '2025-03-20',
      time: '10:00',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      testName: 'X-Ray',
      date: '2025-03-21',
      time: '14:30',
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    testName: '',
    date: '',
    time: '',
  });

  const [editId, setEditId] = useState(null);
  const [editedAppointment, setEditedAppointment] = useState({});

  // Add Appointment
  const handleAdd = () => {
    if (
      newAppointment.patientName &&
      newAppointment.testName &&
      newAppointment.date &&
      newAppointment.time
    ) {
      const newAppt = {
        ...newAppointment,
        id: Date.now(),
      };
      setAppointments([...appointments, newAppt]);
      setNewAppointment({ patientName: '', testName: '', date: '', time: '' });
    }
  };

  // Delete Appointment
  const handleDelete = (id) => {
    const updated = appointments.filter((appt) => appt.id !== id);
    setAppointments(updated);
  };

  // Start Editing
  const handleEdit = (appt) => {
    setEditId(appt.id);
    setEditedAppointment({ ...appt });
  };

  // Save Edited
  const handleSave = () => {
    const updated = appointments.map((appt) =>
      appt.id === editId ? editedAppointment : appt
    );
    setAppointments(updated);
    setEditId(null);
    setEditedAppointment({});
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Appointments</h2>

      {/* Add Appointment */}
      <div className="bg-white p-4 rounded shadow mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Patient Name"
          className="border px-3 py-2 rounded w-48"
          value={newAppointment.patientName}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, patientName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Test Name"
          className="border px-3 py-2 rounded w-48"
          value={newAppointment.testName}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, testName: e.target.value })
          }
        />
        <input
          type="date"
          className="border px-3 py-2 rounded w-44"
          value={newAppointment.date}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, date: e.target.value })
          }
        />
        <input
          type="time"
          className="border px-3 py-2 rounded w-36"
          value={newAppointment.time}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, time: e.target.value })
          }
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Appointment
        </button>
      </div>

      {/* Appointment Table */}
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-700">
              <th className="p-2">Patient</th>
              <th className="p-2">Test</th>
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b hover:bg-gray-50">
                {editId === appt.id ? (
                  <>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border px-2 py-1 rounded w-full"
                        value={editedAppointment.patientName}
                        onChange={(e) =>
                          setEditedAppointment({
                            ...editedAppointment,
                            patientName: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border px-2 py-1 rounded w-full"
                        value={editedAppointment.testName}
                        onChange={(e) =>
                          setEditedAppointment({
                            ...editedAppointment,
                            testName: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="date"
                        className="border px-2 py-1 rounded w-full"
                        value={editedAppointment.date}
                        onChange={(e) =>
                          setEditedAppointment({
                            ...editedAppointment,
                            date: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="time"
                        className="border px-2 py-1 rounded w-full"
                        value={editedAppointment.time}
                        onChange={(e) =>
                          setEditedAppointment({
                            ...editedAppointment,
                            time: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-2 text-center">
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:underline mr-3"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="text-gray-600 hover:underline"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-2 font-medium">{appt.patientName}</td>
                    <td className="p-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {appt.testName}
                      </span>
                    </td>
                    <td className="p-2">{appt.date}</td>
                    <td className="p-2">{appt.time}</td>
                    <td className="p-2 text-center flex justify-center gap-4">
                      <button
                        onClick={() => handleEdit(appt)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(appt.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {appointments.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No appointments yet.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
