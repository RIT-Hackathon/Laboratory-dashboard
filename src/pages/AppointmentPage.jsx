import DashboardLayout from "../components/layout/DashboardLayout";
import AppointmentList from "../features/appointments/components/AppointmentList";
import AppointmentFilters from "../features/appointments/components/AppointmentFilters";

const AppointmentPage = () => {
  return (
    <DashboardLayout>
      <section className="bg-white border border-gray-200 p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Appointments</h1>
        <p className="text-gray-700">
          View, filter, and manage lab appointments efficiently.
        </p>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow mb-6">
        <AppointmentFilters />
      </section>

      {/* Appointment List Section */}
      <section className="bg-white border border-gray-200 p-4 rounded-lg shadow">
        <AppointmentList />
      </section>
    </DashboardLayout>
  );
};

export default AppointmentPage;
