import React, { useState } from "react";

const StaffPopupForm = ({ onClose, onAddStaff }) => {
  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = staffData;
    if (name && email && phone) {
      onAddStaff(staffData); // Send data up
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Staff</h2>
        <form onSubmit={handleSubmit}>
          {["name", "email", "phone"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium text-gray-600 capitalize">{field}</label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={staffData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          ))}
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Add Staff
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffPopupForm;
