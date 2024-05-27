import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const QueryPincode = ({ darkMode }) => {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);

  const handleQuery = async () => {
    try {
      const response = await axios.get(`https://asia-south1-local-cogency-413608.cloudfunctions.net/readquerysparsematrixnew?pincode=${pincode}`);
      setResult(response.data);
      toast.success('Query successful!');
    } catch (error) {
      toast.error('Error fetching data');
    }
  };

  return (
    <div className={`p-6 shadow-lg rounded-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Query by Pincode</h2>
      <input 
        type="text" 
        value={pincode} 
        onChange={(e) => setPincode(e.target.value)} 
        placeholder="Enter pincode" 
        className={`mb-4 p-2 border rounded w-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
      />
      <button 
        onClick={handleQuery} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Query
      </button>
      {result && (
        <div className={`mt-4 p-4 rounded max-h-48 overflow-y-auto ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}>
          <h3 className="text-lg font-semibold mb-2">Companies:</h3>
          <ul>
            {result.message.map((company, index) => (
              <li key={index} className="mb-1">{company}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QueryPincode;
