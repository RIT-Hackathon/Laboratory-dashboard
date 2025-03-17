// src/components/staff/StaffList.jsx

import React, { useEffect } from 'react';
import { useStaff } from '../hooks/useStaff';
import StaffCard from './StaffCard';
import AddStaffForm from './AddStaffFrom';

const StaffList = () => {
  const { staffList, loading, error, fetchStaff } = useStaff();

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Staff Members</h2>
      <AddStaffForm />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {staffList.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StaffList;
