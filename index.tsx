import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProfileProvider } from './context/UserProfileContext';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <UserProfileProvider>
        <App />
    </UserProfileProvider>
  </React.StrictMode>
);
