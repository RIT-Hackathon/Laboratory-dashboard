// src/pages/DashboardPage.jsx
import DashboardLayout from '../components/layout/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome to Swasthya Lab Dashboard 👨‍⚕️</h2>
        <p className="text-gray-300">
          Manage appointments, upload reports, and track patient history — all in one place.
        </p>
      </section>

      {/* Summary Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">Appointments Today</h3>
          <p className="text-3xl font-bold mt-2 text-green-400">12</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">Pending Reports</h3>
          <p className="text-3xl font-bold mt-2 text-yellow-400">5</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">Total Patients</h3>
          <p className="text-3xl font-bold mt-2 text-blue-400">150</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
            View Appointments
          </button>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">
            Upload Report
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">
            Patient Records
          </button>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default DashboardPage;
