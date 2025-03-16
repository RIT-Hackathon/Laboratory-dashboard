import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center shadow-md">
    <h1 className="font-bold text-lg">Lab Dashboard</h1>
    <div>
      <Link to="/" className="mr-4 hover:underline hover:text-gray-300">Dashboard</Link>
      <Link to="/appointments" className="hover:underline hover:text-gray-300">Appointments</Link>
    </div>
  </nav>
);

export default Navbar;
