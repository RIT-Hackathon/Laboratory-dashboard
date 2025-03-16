// src/features/appointments/components/AppointmentTable.jsx
const AppointmentTable = ({ appointments }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg shadow">
          <thead>
            <tr className="text-left text-gray-300">
              <th className="p-4">Patient Name</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-t border-gray-700 hover:bg-gray-700">
                <td className="p-4">{appt.patientName}</td>
                <td className="p-4">{appt.contact}</td>
                <td className="p-4">{new Date(appt.date).toLocaleDateString()}</td>
                <td className="p-4">{appt.time}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      appt.status === 'Completed'
                        ? 'bg-green-600'
                        : appt.status === 'Pending'
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
                <td className="p-4 space-x-2">
                  <button className="bg-blue-600 px-2 py-1 rounded text-sm">Edit</button>
                  <button className="bg-red-600 px-2 py-1 rounded text-sm">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default AppointmentTable;
  