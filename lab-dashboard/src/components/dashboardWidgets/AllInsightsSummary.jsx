import React from 'react';

const AIInsightsSummary = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4">AI Insights</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>📊 Increase in vitamin D deficiency cases in last 30 days.</li>
        <li>💡 Suggest Vitamin D Test for patients over 50.</li>
        <li>⚠️ 5 patients flagged for abnormal sugar levels.</li>
      </ul>
    </div>
  );
};

export default AIInsightsSummary;
