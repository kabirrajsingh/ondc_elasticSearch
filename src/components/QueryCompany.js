import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const QueryCompany = () => {
  const [company, setCompany] = useState('');
  const [result, setResult] = useState(null);

  const handleQuery = async () => {
    try {
      const response = await axios.get(`https://asia-south1-local-cogency-413608.cloudfunctions.net/readquerysparsematrixnew?company=${company}`);
      setResult(response.data);
      toast.success('Query successful!');
    } catch (error) {
      toast.error('Error fetching data');
    }
  };

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Query by Company</h2>
      <input 
        type="text" 
        value={company} 
        onChange={(e) => setCompany(e.target.value)} 
        placeholder="Enter company name" 
        className="mb-4 p-2 border rounded w-full"
      />
      <button 
        onClick={handleQuery} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Query
      </button>
      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Pincodes:</h3>
          <ul>
            {result.message.map((pincode, index) => (
              <li key={index} className="mb-1">{pincode}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QueryCompany;
