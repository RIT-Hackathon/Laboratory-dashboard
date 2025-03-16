// src/components/layout/DashboardLayout.jsx
import Navbar from './Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 p-6 space-y-6">
        {children}  {/* Only render page-specific content */}
      </main>
    </div>
  );
};

export default DashboardLayout;
