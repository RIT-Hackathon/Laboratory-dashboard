import DashboardLayout from "../components/layout/DashboardLayout";
import AppointmentList from "../features/appointments/components/AppointmentList";
import AppointmentFilters from "../features/appointments/components/AppointmentFilters";

const AppointmentPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      {/* Filter Section */}
      <AppointmentFilters />

      {/* Appointment List Section */}
      <AppointmentList />
    </DashboardLayout>
  );
};

export default AppointmentPage;
