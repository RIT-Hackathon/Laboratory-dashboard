// src/features/staff/services/staffService.js

const API_BASE_URL = 'https://your-api.com/api/staff'; // Replace with actual backend URL or mock API

export const fetchStaffList = async () => {
  // Simulate fetch call
  return {
    data: [
      { id: 1, name: 'Dr. Emily Watson', role: 'Pathologist' },
      { id: 2, name: 'John Doe', role: 'Technician' },
    ],
  };
};

export const addStaffMember = async (staffData) => {
  // Simulate API response
  return { data: { id: Date.now(), ...staffData } };
};

export const deleteStaffMember = async (id) => {
  // Simulate deletion (return nothing or a success message)
  return { success: true };
};
