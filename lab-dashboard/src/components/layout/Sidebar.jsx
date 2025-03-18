import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeClass = 'bg-blue-500 text-white rounded px-3 py-2';
  const normalClass = 'text-gray-700 px-3 py-2 rounded hover:bg-blue-100';

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="w-64 bg-white border-r h-full flex flex-col p-4 justify-between">
      <div>
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Swasthya Lab</h1>
        <nav className="flex flex-col space-y-2">
          <Link to="/" className={location.pathname === '/' ? activeClass : normalClass}>
            Dashboard
          </Link>
          <Link
            to="/appointments"
            className={location.pathname === '/appointments' ? activeClass : normalClass}
          >
            Appointments
          </Link>
          {isLoggedIn && (
            <>
              <Link
                to="/staff"
                className={location.pathname === '/staff' ? activeClass : normalClass}
              >
                Staff
              </Link>
              <Link
                to="/patients"
                className={location.pathname === '/patients' ? activeClass : normalClass}
              >
                Patients
              </Link>
            </>
          )}
        </nav>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="text-red-500 hover:underline mt-4 block"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLoginRedirect}
            className="text-blue-600 hover:underline mt-4 block"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
