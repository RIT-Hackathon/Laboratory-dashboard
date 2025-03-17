import React from 'react';
import Card from '../UI/Card';
import { formatDate } from '../../utils/formatDate';

const AppointmentCard = ({ appointment }) => (
  <Card className="mb-4">
    <h4 className="font-semibold">{appointment.patientName}</h4>
    <p className="text-sm text-gray-600">Test: {appointment.testName}</p>
    <p className="text-sm text-gray-600">Date: {formatDate(appointment.date)}</p>
    <p className="text-sm text-gray-600">Time: {appointment.time}</p>
  </Card>
);

export default AppointmentCard;
