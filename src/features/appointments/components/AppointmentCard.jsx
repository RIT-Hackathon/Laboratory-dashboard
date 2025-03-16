const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{appointment.patientName}</h3>
        <p className="text-gray-400">
          {appointment.date} at {appointment.time}
        </p>
      </div>
      <span
        className={`px-3 py-1 rounded text-sm ${
          appointment.status === "Completed"
            ? "bg-green-600"
            : appointment.status === "Upcoming"
            ? "bg-yellow-600"
            : "bg-red-600"
        }`}
      >
        {appointment.status}
      </span>
    </div>
  );
};

export default AppointmentCard;
