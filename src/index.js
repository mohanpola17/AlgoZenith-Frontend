import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './componenets/Navbar';
import Sidebar from "./componenets/Sidebar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Sidebar />
  </React.StrictMode>
);