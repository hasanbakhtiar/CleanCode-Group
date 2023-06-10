import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);

