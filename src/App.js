import React, { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from './components/FileUpload';
import QueryCompany from './components/QueryCompany';
import QueryPincode from './components/QueryPincode';
import QueryCompanyPincode from './components/QueryCompanyPincode';
import InsertData from './components/InsertData';
import DeleteData from './components/DeleteData';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col px-4 min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8 text-center mt-4">
            SwiftPin Checker
          </h1>
          <h2 className="text-lg font-semibold mb-4 text-center">
            Lightning-Fast Pincode Verification for Seamless Serviceability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <FileUpload darkMode={darkMode} />
            <QueryCompany darkMode={darkMode} />
            <QueryPincode darkMode={darkMode} />
            <QueryCompanyPincode darkMode={darkMode} />
            <InsertData darkMode={darkMode} />
            <DeleteData darkMode={darkMode} />
          </div>
        </div>
        <div className="fixed bottom-8 right-8">
          <button
            onClick={toggleDarkMode}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
