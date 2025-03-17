import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../../features/appointments/appointmentsSlice';
import AppointmentCard from './AppointmentCard';

const AppointmentList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      {list.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default AppointmentList;
