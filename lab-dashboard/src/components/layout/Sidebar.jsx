import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Appointments', path: '/appointments' },
  { name: 'Staff', path: '/staff' },
  { name: 'Patients', path: '/patients' }
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-white h-screen shadow-md p-4">
      <h2 className="text-2xl font-bold mb-6 text-primary">Swasthya Lab</h2>
      <nav>
        {navItems.map(item => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-4 py-2 rounded mb-2 ${
              pathname === item.path ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
