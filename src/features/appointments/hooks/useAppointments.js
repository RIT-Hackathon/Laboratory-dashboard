// src/features/appointments/hooks/useAppointments.js
import { useState, useEffect } from 'react';
import { fetchAppointments } from '../services/appointmentService';

export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments()
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load appointments');
        setLoading(false);
      });
  }, []);

  return { appointments, loading, error };
};
