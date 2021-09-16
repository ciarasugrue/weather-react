import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Coder from './Coder';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Coder />
  </React.StrictMode>,
  document.getElementById('root')
);

