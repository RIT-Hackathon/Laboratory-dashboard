import React from 'react';

const PatientsPage = () => {
  const patients = [
    { id: 1, name: 'Aarav Mehta', age: 45, condition: 'Diabetes', status: 'Critical' },
    { id: 2, name: 'Priya Sharma', age: 30, condition: 'Routine Checkup', status: 'Admitted' },
    { id: 3, name: 'Rohit Verma', age: 52, condition: 'Post Surgery', status: 'Discharged' },
  ];

  const metrics = {
    total: patients.length,
    newToday: 1,
    critical: patients.filter((p) => p.status === 'Critical').length,
    discharged: patients.filter((p) => p.status === 'Discharged').length,
  };

  const slots = {
    Morning: '8:00 AM - 11:00 AM',
    Afternoon: '12:00 PM - 3:00 PM',
    Evening: '4:00 PM - 7:00 PM',
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Patient Management</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Total Patients" value={metrics.total} />
        <MetricCard label="New Today" value={metrics.newToday} />
        <MetricCard label="Critical Cases" value={metrics.critical} />
        <MetricCard label="Discharged" value={metrics.discharged} />
      </div>

      {/* Appointment Slots */}
      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">Appointment Slots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.entries(slots).map(([slot, timing]) => (
            <div key={slot} className="bg-white p-4 rounded shadow border-l-4 border-purple-500">
              <h3 className="text-lg font-medium">{slot} Slot</h3>
              <p className="text-gray-600">{timing}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Patient Form */}
      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">Add Patient</h2>
        <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Age"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Condition"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Add Patient
          </button>
        </div>
      </div>

      {/* Patient List */}
      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">Patient Records</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {patients.map((patient) => (
            <div key={patient.id} className="bg-white p-4 rounded shadow border-t-4 border-purple-400">
              <h3 className="text-lg font-bold">{patient.name}</h3>
              <p className="text-sm text-gray-700">Age: {patient.age}</p>
              <p className="text-sm text-gray-700">Condition: {patient.condition}</p>
              <p className="text-sm">
                Status:{' '}
                <span
                  className={
                    patient.status === 'Critical'
                      ? 'text-red-600 font-semibold'
                      : patient.status === 'Admitted'
                      ? 'text-green-600 font-semibold'
                      : 'text-gray-500 font-semibold'
                  }
                >
                  {patient.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Metric Card Component
const MetricCard = ({ label, value }) => (
  <div className="bg-white p-4 rounded shadow text-center">
    <h3 className="text-lg font-semibold text-gray-700">{label}</h3>
    <p className="text-2xl font-bold text-purple-600">{value}</p>
  </div>
);

export default PatientsPage;
