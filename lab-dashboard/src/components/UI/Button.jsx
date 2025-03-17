import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
