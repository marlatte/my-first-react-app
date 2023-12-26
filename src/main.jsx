import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting, { Person } from './Greeting.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person />
  </React.StrictMode>
);
