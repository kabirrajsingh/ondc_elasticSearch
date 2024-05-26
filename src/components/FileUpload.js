// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://asia-south1-local-cogency-413608.cloudfunctions.net/uploadsparsematrixnew', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('File uploaded successfully!');
    } catch (error) {
      toast.error('Error uploading file');
    }
  };

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Upload File</h2>
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4 p-2 border rounded w-full"
      />
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default FileUpload;
