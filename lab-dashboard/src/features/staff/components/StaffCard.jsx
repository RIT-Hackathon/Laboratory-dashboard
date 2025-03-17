import React from 'react';
import { useStaff } from '../hooks/useStaff';

const StaffCard = ({ staff }) => {
  const { deleteStaff } = useStaff();

  return (
    <div className="bg-white shadow-md p-4 rounded-md border border-gray-200">
      <h3 className="text-lg font-medium">{staff.name}</h3>
      <p className="text-sm text-gray-600">Role: {staff.role}</p>
      <p className="text-sm text-gray-600">Email: {staff.email}</p>
      <button
        className="mt-2 text-red-500 hover:underline"
        onClick={() => deleteStaff(staff.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default StaffCard;
