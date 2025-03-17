import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-white p-8 shadow-lg rounded w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
