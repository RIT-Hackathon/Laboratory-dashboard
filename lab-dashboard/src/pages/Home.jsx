import React from 'react';
import DashboardPage from './dashboard/DashboardPage';

const Home = () => {
  console.log("Rendering Home.jsx");

  return (
    <div>
      <p className="text-blue-500 font-bold">Debug: Home Component Loaded</p>
      <DashboardPage />
    </div>
  );
};

export default Home;
