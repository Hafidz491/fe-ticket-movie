import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './components/auth/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
