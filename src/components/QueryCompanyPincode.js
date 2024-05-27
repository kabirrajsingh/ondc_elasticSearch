import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const QueryCompanyPincode = ({ darkMode }) => {
  const [company, setCompany] = useState('');
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);

  const handleQuery = async () => {
    try {
      const response = await axios.get(`https://asia-south1-local-cogency-413608.cloudfunctions.net/readquerysparsematrixnew?company=${company}&pincode=${pincode}`);
      setResult(response.data);
      toast.success('Query successful!');
    } catch (error) {
      toast.error('Error fetching data');
    }
  };

  return (
    <div className={`p-6 shadow-lg rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Query by Company and Pincode</h2>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input 
          type="text" 
          value={company} 
          onChange={(e) => setCompany(e.target.value)} 
          placeholder="Enter company name" 
          className={`p-2 border rounded w-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
        />
        <input 
          type="text" 
          value={pincode} 
          onChange={(e) => setPincode(e.target.value)} 
          placeholder="Enter pincode" 
          className={`p-2 border rounded w-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
        />
      </div>
      <button 
        onClick={handleQuery} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Query
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded ${result.message ? 'bg-green-200' : 'bg-red-200'} ${darkMode ? 'text-black' : 'text-black'}`}>
          {result.message ? (
            <div className="p-2 rounded">Result: True</div>
          ) : (
            <div className="p-2 rounded">Result: False</div>
          )}
        </div>
      )}
    </div>
  );
};

export default QueryCompanyPincode;
