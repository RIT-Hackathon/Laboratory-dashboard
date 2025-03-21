import React, { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import StaffPopupForm from "./StaffPopUpForm";

const labHeadId = "3e5b971e-5cd4-4f48-ba5b-f564c7fcddcd";
const labId = "007e5c76-f89d-4704-9c0f-6c3c1fb1a184";

const Dashboard = () => {
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [staffList, setStaffList] = useState([]);

  // 🔹 Fetch staff list on mount
  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/lab-assistant/assistants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          labId,
          headId: labHeadId,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setStaffList(data.data);
      } else {
        console.error("Error fetching staff:", data.message);
      }
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  const handleAddStaff = async (newStaff) => {
    try {
      const response = await fetch("http://localhost:8000/api/lab-assistant/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          labHeadId,
          labId,
          name: newStaff.name,
          email: newStaff.email,
          phone: newStaff.phone,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Staff added:", data);
        fetchStaffList();
      } else {
        console.error("Error adding staff:", data.message);
      }
    } catch (error) {
      console.error("Error adding staff:", error);
    }
  };

  const handleDeleteStaff = async (assistantId) => {
    try {
      const response = await fetch("http://localhost:8000/api/lab-assistant/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          labHeadId,
          assistantId,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Staff deleted:", data);
        fetchStaffList();
      } else {
        console.error("Error deleting staff:", data.message);
      }
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lab Staff</h1>
        <button
          onClick={() => setShowStaffForm(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus className="mr-2" size={20} />
          Add Staff
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {staffList.map((staff) => (
          <div
            key={staff.id}
            className="bg-white p-4 rounded shadow flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{staff.name}</h2>
              <p className="text-sm text-gray-600">{staff.email}</p>
              <p className="text-sm text-gray-600">{staff.phone}</p>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleDeleteStaff(staff.id)}
                className="text-red-500 hover:text-red-700"
                title="Delete Staff"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Staff Form Modal */}
      {showStaffForm && (
        <StaffPopupForm
          onClose={() => setShowStaffForm(false)}
          onSave={handleAddStaff}
        />
      )}
    </div>
  );
};

export default Dashboard;
