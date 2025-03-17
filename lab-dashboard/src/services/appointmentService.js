const API_BASE = '/api/appointments';

export const fetchAppointmentsAPI = async () => {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch appointments');
  return res.json();
};

export const addAppointmentAPI = async (appointmentData) => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appointmentData)
  });
  if (!res.ok) throw new Error('Failed to add appointment');
  return res.json();
};
