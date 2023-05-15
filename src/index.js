import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import ModeDarkContextProvider from './store/dark-mode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeDarkContextProvider>
      <App />
    </ModeDarkContextProvider>
  </React.StrictMode>
);
