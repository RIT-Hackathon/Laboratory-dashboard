import AppointmentCard from "./AppointmentCard";

const dummyAppointments = [
  {
    id: 1,
    patientName: "John Doe",
    date: "2025-03-17",
    time: "10:30 AM",
    status: "Upcoming",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    date: "2025-03-17",
    time: "11:00 AM",
    status: "Completed",
  },
];

const AppointmentList = () => {
  return (
    <div className="space-y-4">
      {dummyAppointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default AppointmentList;
