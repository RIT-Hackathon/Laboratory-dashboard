import React from 'react';
import Card  from '../UI/Card';
import  Button  from '../UI/Button';

const AdminTasksPanel = () => {
  return (
    <Card title="Admin Tasks">
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          Approve new staff requests
          <Button variant="primary" size="sm">View</Button>
        </li>
        <li className="flex justify-between items-center">
          Review lab inventory
          <Button variant="primary" size="sm">Check</Button>
        </li>
        <li className="flex justify-between items-center">
          Export daily reports
          <Button variant="primary" size="sm">Export</Button>
        </li>
      </ul>
    </Card>
  );
};

export default AdminTasksPanel;
