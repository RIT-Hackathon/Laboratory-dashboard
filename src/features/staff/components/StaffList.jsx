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
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">👥 Current Staff Members</h2>
        <input
          type="text"
          placeholder="Search by name or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-900 text-white p-2 rounded"
        />
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th className="py-2">Name</th>
            <th className="py-2">Role</th>
            <th className="py-2">Email</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((staff) => (
            <tr key={staff.id} className="border-b border-gray-700">
              <td className="py-2">{staff.name}</td>
              <td className="py-2">{staff.role}</td>
              <td className="py-2">{staff.email}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDelete(staff.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredList.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center text-gray-400 py-4">
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
