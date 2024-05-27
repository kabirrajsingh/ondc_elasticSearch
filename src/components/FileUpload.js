import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const FileUpload = ({ darkMode }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://asia-south1-local-cogency-413608.cloudfunctions.net/uploadsparsematrixnew', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('File uploaded successfully!');
      setFile(null);
    } catch (error) {
      toast.error('Error uploading file');
    }
  };

  return (
    <div className={`p-6 shadow-lg rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      <input 
        type="file" 
        onChange={handleFileChange} 
        className={`mb-4 p-2 border rounded w-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
      />
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
      <div className="mt-2">
        {file && (
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Selected file: {file.name}
          </span>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
