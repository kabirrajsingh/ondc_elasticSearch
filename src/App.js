import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import FileUpload from './components/FileUpload';
import QueryCompany from './components/QueryCompany';
import QueryPincode from './components/QueryPincode';
import QueryCompanyPincode from './components/QueryCompanyPincode';
import InsertData from './components/InsertData';
import DeleteData from './components/DeleteData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Optimal Storage and Retrieval</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FileUpload />
        <QueryCompany />
        <QueryPincode />
        <QueryCompanyPincode />
        <InsertData/>
        <DeleteData/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
