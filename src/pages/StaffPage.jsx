import DashboardLayout from "../components/layout/DashboardLayout";
import { useState } from "react";
import AddStaffForm from "../features/staff/components/AddStaffForm";
import StaffList from "../features/staff/components/StaffList";

const StaffPage = () => {
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Dr. Arjun Mehta", role: "Pathologist", email: "arjun@swasthya.com" },
    { id: 2, name: "Priya Sharma", role: "Lab Assistant", email: "priya@swasthya.com" },
    { id: 3, name: "Rahul Singh", role: "Technician", email: "rahul@swasthya.com" },
  ]);

  const addStaff = (newStaff) => {
    setStaffList((prev) => [...prev, { id: Date.now(), ...newStaff }]);
  };

  const deleteStaff = (id) => {
    setStaffList((prev) => prev.filter((staff) => staff.id !== id));
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Manage Staff 👨‍⚕️</h1>
      
      {/* Add Staff Form */}
      <div className="bg-white border border-gray-300 rounded-lg shadow p-6 mb-6">
        <AddStaffForm onAdd={addStaff} />
      </div>

      {/* Staff List */}
      <div className="bg-white border border-gray-300 rounded-lg shadow p-6">
        <StaffList staffList={staffList} onDelete={deleteStaff} />
      </div>
    </DashboardLayout>
  );
};

export default StaffPage;
