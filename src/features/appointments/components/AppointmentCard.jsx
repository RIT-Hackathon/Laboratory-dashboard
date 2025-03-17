const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          {appointment.patientName}
        </h3>
        <p className="text-gray-600">
          {appointment.date} at {appointment.time}
        </p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          appointment.status === "Completed"
            ? "bg-green-100 text-green-700"
            : appointment.status === "Upcoming"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {appointment.status}
      </span>
    </div>
  );
};

export default AppointmentCard;
