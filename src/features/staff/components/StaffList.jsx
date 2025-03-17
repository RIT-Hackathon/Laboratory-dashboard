import { useState } from "react";
import toast from "react-hot-toast";

const StaffList = ({ staffList, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = staffList.filter((staff) =>
    `${staff.name} ${staff.role}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    onDelete(id);
    toast.success("Staff removed");
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">👥 Current Staff Members</h2>
        <input
          type="text"
          placeholder="Search by name or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-gray-600 border-b border-gray-300">
            <th className="py-2">Name</th>
            <th className="py-2">Role</th>
            <th className="py-2">Email</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((staff) => (
            <tr key={staff.id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
              <td className="py-2">{staff.name}</td>
              <td className="py-2">{staff.role}</td>
              <td className="py-2">{staff.email}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDelete(staff.id)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredList.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 py-4">
                No staff found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
