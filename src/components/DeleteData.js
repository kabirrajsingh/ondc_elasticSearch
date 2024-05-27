import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteData = ({ darkMode }) => {
  const [company, setCompany] = useState('');
  const [pincode, setPincode] = useState('');

  const handleDeletion = async () => {
    try {
      const response = await axios.get(`https://asia-south1-local-cogency-413608.cloudfunctions.net/updatesparsematrix?company=${company}&pincode=${pincode}&operation=delete`);
      toast.success('Data deleted successfully!');
    } catch (error) {
      toast.error('Error deleting data');
    }
  };

  return (
    <div className={`p-6 shadow-lg rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Delete Data</h2>
      <input 
        type="text" 
        value={company} 
        onChange={(e) => setCompany(e.target.value)} 
        placeholder="Enter company name" 
        className={`mb-4 p-2 border rounded w-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
      />
      <input 
        type="text" 
        value={pincode} 
        onChange={(e) => setPincode(e.target.value)} 
        placeholder="Enter pincode" 
        className={`mb-4 p-2 border rounded w-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
      />
      <button 
        onClick={handleDeletion} 
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteData;
