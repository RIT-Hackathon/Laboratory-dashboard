import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../../features/appointments/appointmentsSlice';
import Button from '../UI/Button';

const AddAppointmentForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    patientName: '',
    testName: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAppointment(formData));
    setFormData({ patientName: '', testName: '', date: '', time: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow mb-4">
      <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} className="input" required />
      <input type="text" name="testName" placeholder="Test Name" value={formData.testName} onChange={handleChange} className="input" required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} className="input" required />
      <input type="time" name="time" value={formData.time} onChange={handleChange} className="input" required />
      <Button type="submit">Add Appointment</Button>
    </form>
  );
};

export default AddAppointmentForm;
