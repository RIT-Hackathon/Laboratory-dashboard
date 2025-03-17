import React from 'react';
import  Card  from '../UI/Card';

const mockAppointments = [
  { id: 1, name: 'John Doe', test: 'Blood Test', time: '10:30 AM' },
  { id: 2, name: 'Jane Smith', test: 'MRI Scan', time: '11:15 AM' },
  { id: 3, name: 'Mike Ross', test: 'X-Ray', time: '12:00 PM' },
];

const RecentAppointments = () => {
  return (
    <Card title="Recent Appointments">
      <ul className="space-y-3">
        {mockAppointments.map(appt => (
          <li key={appt.id} className="flex justify-between">
            <span>{appt.name} - {appt.test}</span>
            <span className="text-gray-500">{appt.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecentAppointments;
