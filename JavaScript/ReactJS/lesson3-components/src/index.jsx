import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.scss';
import music from "./audio/himn.mp3";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello React</h1>
    <audio src={music} controls type="audio/mp3"></audio>
  </React.StrictMode>
);

