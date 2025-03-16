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
      className="bg-gray-800 p-4 rounded-lg shadow mb-6"
    >
      <h2 className="text-lg font-semibold mb-4">➕ Add New Staff Member</h2>
      <div className="flex flex-wrap gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="bg-gray-900 text-white p-2 rounded w-full md:w-1/3"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-gray-900 text-white p-2 rounded w-full md:w-1/3"
        />
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          className="bg-gray-900 text-white p-2 rounded w-full md:w-1/3"
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
