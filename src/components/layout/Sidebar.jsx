import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="bg-gray-100 w-64 min-h-screen p-4">
    <ul>
      <li className="mb-2"><Link to="/" className="hover:text-blue-600">Dashboard</Link></li>
      <li className="mb-2"><Link to="/appointments" className="hover:text-blue-600">Appointments</Link></li>
      <li className="mb-2"><Link to="/staff" className="hover:text-blue-600">Staff</Link></li>
      <li className="mb-2"><Link to="/intent" className="hover:text-blue-600">Intent Detection</Link></li>
      <li className="mb-2"><Link to="/settings" className="hover:text-blue-600">Settings</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
