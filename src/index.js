import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
);



