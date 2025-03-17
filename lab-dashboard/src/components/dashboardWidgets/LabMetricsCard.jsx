import React from 'react';
import Card  from '../UI/Card';

const LabMetricsCard = () => {
  return (
    <Card title="Lab Metrics">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500">Tests Today</p>
          <p className="text-2xl font-bold">134</p>
        </div>
        <div>
          <p className="text-gray-500">Pending Results</p>
          <p className="text-2xl font-bold">29</p>
        </div>
        <div>
          <p className="text-gray-500">Avg Turnaround</p>
          <p className="text-2xl font-bold">4.2 hrs</p>
        </div>
        <div>
          <p className="text-gray-500">Total Staff</p>
          <p className="text-2xl font-bold">18</p>
        </div>
      </div>
    </Card>
  );
};

export default LabMetricsCard;
