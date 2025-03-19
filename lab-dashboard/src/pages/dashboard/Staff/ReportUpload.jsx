import React from "react";
import { UploadCloud } from "lucide-react";

const ReportUpload = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload Reports</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
        <UploadCloud size={18} />
        <span>Upload</span>
      </button>
    </div>
  );
};

export default ReportUpload;
