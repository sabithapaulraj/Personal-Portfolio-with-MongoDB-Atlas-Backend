import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client

import App from './App';
import './styles/Global.css'; // Import your global styles from the components folder

// Create a root for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
