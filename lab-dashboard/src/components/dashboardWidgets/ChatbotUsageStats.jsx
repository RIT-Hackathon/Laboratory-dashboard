import React from 'react';
import Card from '../UI/Card';

const ChatbotUsageStats = () => {
  return (
    <Card title="Chatbot Usage">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500">Queries Today</p>
          <p className="text-xl font-bold">87</p>
        </div>
        <div>
          <p className="text-gray-500">Avg Response Time</p>
          <p className="text-xl font-bold">2.1 sec</p>
        </div>
        <div>
          <p className="text-gray-500">Bookings via Chat</p>
          <p className="text-xl font-bold">42</p>
        </div>
        <div>
          <p className="text-gray-500">Feedback Score</p>
          <p className="text-xl font-bold">4.8/5</p>
        </div>
      </div>
    </Card>
  );
};

export default ChatbotUsageStats;
