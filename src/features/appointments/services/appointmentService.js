// src/features/appointments/services/appointmentService.js
export const fetchAppointments = async () => {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 500));

  // Dummy data
  return [
    {
      id: 1,
      patientName: 'John Doe',
      contact: '9876543210',
      date: '2025-03-17',
      time: '10:00 AM',
      status: 'Pending',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      contact: '9123456789',
      date: '2025-03-17',
      time: '12:00 PM',
      status: 'Completed',
    },
    {
      id: 3,
      patientName: 'Arjun Mehta',
      contact: '9012345678',
      date: '2025-03-18',
      time: '9:30 AM',
      status: 'Pending',
    },
  ];
};
