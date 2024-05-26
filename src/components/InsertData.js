import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const InsertData = () => {
  const [company, setCompany] = useState('');
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);

  const handleInsertion = async () => {
    try {
      const response = await axios.post('https://asia-south1-local-cogency-413608.cloudfunctions.net/updatesparsematrix', {
        company: company,
        pincode: pincode
      });
      setResult(response.data);
      toast.success('Data inserted successfully!');
    } catch (error) {
      toast.error('Error inserting data');
    }
  };

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Insert Data</h2>
      <input 
        type="text" 
        value={company} 
        onChange={(e) => setCompany(e.target.value)} 
        placeholder="Enter company name" 
        className="mb-4 p-2 border rounded w-full"
      />
      <input 
        type="text" 
        value={pincode} 
        onChange={(e) => setPincode(e.target.value)} 
        placeholder="Enter pincode" 
        className="mb-4 p-2 border rounded w-full"
      />
      <button 
        onClick={handleInsertion} 
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Insert
      </button>
      {result && <div className="mt-4 bg-gray-100 p-2 rounded">{JSON.stringify(result)}</div>}
    </div>
  );
};

export default InsertData;
