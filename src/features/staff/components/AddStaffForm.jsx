import { useState } from "react";
import toast from "react-hot-toast";

const AddStaffForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ name: "", role: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.email) {
      toast.error("All fields are required!");
      return;
    }
    onAdd(formData);
    toast.success("Staff added successfully!");
    setFormData({ name: "", role: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-lg border border-gray-300 bg-white shadow mb-6"
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-900">➕ Add New Staff Member</h2>
      <div className="flex flex-wrap gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border border-gray-300 p-2 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          className="border border-gray-300 p-2 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Add Staff
        </button>
      </div>
    </form>
  );
};

export default AddStaffForm;
