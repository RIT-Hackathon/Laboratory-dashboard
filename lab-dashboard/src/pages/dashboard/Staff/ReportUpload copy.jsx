import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import axios from "axios";

const ReportUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  // Upload file to backend
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file first.");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("report", file);

      const response = await axios.post("http://localhost:8000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("File uploaded successfully!");
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Upload Error:", error);
      alert("File upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload Reports</h2>

      {/* File Input */}
      <input type="file" accept="application/pdf" onChange={handleFileChange} className="mb-4" />

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 disabled:opacity-50"
        disabled={uploading}
      >
        <UploadCloud size={18} />
        <span>{uploading ? "Uploading..." : "Upload"}</span>
      </button>
    </div>
  );
};

export default ReportUpload;
