import React, { useState } from 'react';
import { useStaff } from '../hooks/useStaff';

const AddStaffForm = () => {
  const { addStaff } = useStaff();
  const [form, setForm] = useState({ name: '', role: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStaff(form);
    setForm({ name: '', role: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Staff
      </button>
    </form>
  );
};

export default AddStaffForm;
