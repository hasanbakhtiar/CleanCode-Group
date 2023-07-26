import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.scss';
import App from './App';
import { ApiProvider } from './context/ApiContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider>
    <App />
    </ApiProvider>
  </React.StrictMode>
);
