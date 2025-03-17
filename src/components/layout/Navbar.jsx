const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Swasthya Lab</div>
      <div className="flex gap-4">
        <a href="/" className="text-gray-800 hover:text-blue-600">Dashboard</a>
        <a href="/appointments" className="text-gray-800 hover:text-blue-600">Appointments</a>
        <a href="/staff" className="text-gray-800 hover:text-blue-600">Staff</a>
        <a href="/settings" className="text-gray-800 hover:text-blue-600">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
