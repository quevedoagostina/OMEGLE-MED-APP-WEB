import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginPage from './Components/Recipes/Login';
import RegisterForm from './Components/Recipes/RegisterForm';
import '../dist/output.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
