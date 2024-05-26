// src/components/QueryPincode.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const QueryPincode = () => {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);

  const handleQuery = async () => {
    try {
      const response = await axios.get(`/api/query?pincode=${pincode}`);
      setResult(response.data);
      toast.success('Query successful!');
    } catch (error) {
      toast.error('Error fetching data');
    }
  };

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Query by Pincode</h2>
      <input 
        type="text" 
        value={pincode} 
        onChange={(e) => setPincode(e.target.value)} 
        placeholder="Enter pincode" 
        className="mb-4 p-2 border rounded w-full"
      />
      <button 
        onClick={handleQuery} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Query
      </button>
      {result && <div className="mt-4 bg-gray-100 p-2 rounded">{JSON.stringify(result)}</div>}
    </div>
  );
};

export default QueryPincode;
