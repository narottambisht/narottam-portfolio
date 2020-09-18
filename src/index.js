import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App';
import { RootContextProvider } from './context/RootContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <App />
      </RootContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);