import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const InsertData = ({ darkMode }) => {
  const [company, setCompany] = useState('');
  const [pincode, setPincode] = useState('');

  const handleInsertion = async () => {
    if (!company || !pincode) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await axios.get(`https://asia-south1-local-cogency-413608.cloudfunctions.net/updatesparsematrix?company=${company}&pincode=${pincode}&operation=insert`);
      toast.success('Data inserted successfully!');
      setCompany('');
      setPincode('');
    } catch (error) {
      toast.error('Error inserting data');
    }
  };

  return (
    <div className={`p-6 shadow-lg rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Insert Data</h2>
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
        onClick={handleInsertion} 
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Insert
      </button>
    </div>
  );
};

export default InsertData;
