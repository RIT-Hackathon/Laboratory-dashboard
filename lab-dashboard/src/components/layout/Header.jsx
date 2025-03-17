import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-semibold text-primary">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Admin</span>
        <img src="/images/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
