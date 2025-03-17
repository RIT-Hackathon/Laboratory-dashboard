import React from 'react';
import StaffList from '../../features/staff/components/StaffList';
import AddStaffForm from '../../features/staff/components/AddStaffFrom';

const StaffPage = () => {
  const staff = [
    {
      id: 1,
      name: 'Dr. Emily Watson',
      role: 'Pathologist',
      email: 'emily.watson@lab.com',
      shift: 'Morning',
      status: 'Active',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Technician',
      email: 'john.doe@lab.com',
      shift: 'Evening',
      status: 'On Break',
    },
    {
      id: 3,
      name: 'Sarah Lee',
      role: 'Admin',
      email: 'sarah.lee@lab.com',
      shift: 'Night',
      status: 'Offline',
    },
  ];

  const shiftTimings = {
    Morning: '8:00 AM - 2:00 PM',
    Evening: '2:00 PM - 8:00 PM',
    Night: '8:00 PM - 2:00 AM',
  };

  const metrics = {
    total: staff.length,
    active: staff.filter((s) => s.status === 'Active').length,
    onBreak: staff.filter((s) => s.status === 'On Break').length,
    offline: staff.filter((s) => s.status === 'Offline').length,
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Staff Management</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Total Staff" value={metrics.total} />
        <MetricCard label="Active Now" value={metrics.active} />
        <MetricCard label="On Break" value={metrics.onBreak} />
        <MetricCard label="Offline" value={metrics.offline} />
      </div>

      {/* Shift Timings */}
      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">Shift Timings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.entries(shiftTimings).map(([shift, timing]) => (
            <div key={shift} className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
              <h3 className="text-lg font-medium">{shift} Shift</h3>
              <p className="text-gray-600">{timing}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Staff Form & List */}
      <div>
        <AddStaffForm />
        <StaffList staffData={staff} />
      </div>
    </div>
  );
};

// Metric Card Component
const MetricCard = ({ label, value }) => (
  <div className="bg-white p-4 rounded shadow text-center">
    <h3 className="text-lg font-semibold text-gray-700">{label}</h3>
    <p className="text-2xl font-bold text-blue-600">{value}</p>
  </div>
);

export default StaffPage;
