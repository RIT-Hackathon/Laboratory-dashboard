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
      <h1 className="text-2xl font-bold mb-4">Manage Staff 👨‍⚕️</h1>
      <AddStaffForm onAdd={addStaff} />
      <StaffList staffList={staffList} onDelete={deleteStaff} />
    </DashboardLayout>
  );
};

export default StaffPage;
