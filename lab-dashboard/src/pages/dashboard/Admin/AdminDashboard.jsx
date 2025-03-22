import React, { useState, useEffect } from "react";
import { Plus, Trash2, Mail, Phone, UserCircle, Search, Loader } from "lucide-react";
import StaffPopupForm from "./StaffPopUpForm";
import { useParams } from "react-router-dom";

const labId = "007e5c76-f89d-4704-9c0f-6c3c1fb1a184";

const Dashboard = () => {
  const { adminId } = useParams();
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    fetchStaffList();
  }, [adminId]);

  const fetchStaffList = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/lab-assistant/assistants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          labId,
          headId: adminId, 
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setStaffList(data.data);
      } else {
        console.error("Error fetching staff:", data.message);
      }
    } catch (error) {
      console.error("Error fetching staff:", error);
    } finally {
      setLoading(false);
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
          labHeadId: adminId,
          labId,
          name: newStaff.name,
          email: newStaff.email,
          phone: newStaff.phone,
        }),
      });

      const data = await response.json();
      if (response.ok) {
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
          labHeadId: adminId,
          assistantId,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        fetchStaffList();
        setConfirmDelete(null);
      } else {
        console.error("Error deleting staff:", data.message);
      }
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  // Filter staff based on search term
  const filteredStaff = searchTerm
    ? staffList.filter(staff => 
        staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.phone.includes(searchTerm)
      )
    : staffList;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="mb-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <UserCircle className="mr-2 text-blue-600" size={32} />
              Lab Staff Management
            </h1>
            <p className="text-gray-600 mt-2 ml-1">Oversee and manage your laboratory staff roster</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200">
                Admin ID: {adminId.substring(0, 8)}...
              </span>
            </div>
            <button
              onClick={() => setShowStaffForm(true)}
              className="flex items-center bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm font-medium"
            >
              <Plus className="mr-1.5" size={18} />
              Add Staff
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-5 rounded-xl shadow-md mb-8 border border-gray-100">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search staff by name, email or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 pr-4 py-3 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
      </div>

      {/* Staff List */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center">
            <Loader className="h-8 w-8 text-blue-500 animate-spin" />
            <p className="mt-4 text-gray-600">Loading staff data...</p>
          </div>
        </div>
      ) : filteredStaff.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
            <UserCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No staff members found</h3>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            {searchTerm ? "No staff members match your search criteria." : "Get started by adding a new staff member to your laboratory team."}
          </p>
          <div className="mt-6">
            <button
              onClick={() => setShowStaffForm(true)}
              className="inline-flex items-center px-5 py-2.5 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Staff Member
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff) => (
            <div
              key={staff.id}
              className="bg-white overflow-hidden shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{staff.name}</h3>
                  {confirmDelete === staff.id ? (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDeleteStaff(staff.id)}
                        className="bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1.5 rounded-md transition duration-200"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setConfirmDelete(null)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs px-2.5 py-1.5 rounded-md transition duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmDelete(staff.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
                      title="Delete Staff"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              </div>
              <div className="px-5 py-6 sm:p-6">
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="bg-blue-50 p-2 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600 truncate group-hover:text-blue-600 transition-colors">{staff.email}</p>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-blue-50 p-2 rounded-full mr-3">
                      <Phone className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{staff.phone}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-4 sm:px-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono">ID: {staff.id.substring(0, 8)}...</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    Active
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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