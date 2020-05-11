import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MechProvider } from "./contexts/MechContext"
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <MechProvider>
      <App />
    </MechProvider>
  </BrowserRouter>,
  document.getElementById('root')
);