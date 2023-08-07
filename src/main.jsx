import ReactDOM from 'react-dom/client';
import React from 'react';
import './main.css';
import App from './App';
import ModeDarkContextProvider from './features/darkMode/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeDarkContextProvider>
      <App />
    </ModeDarkContextProvider>
  </React.StrictMode>
);
