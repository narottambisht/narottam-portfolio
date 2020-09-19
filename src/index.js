import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App';
import { RootContextProvider } from './context/RootContext';
import { PortfolioInfoContextProvider } from './context/PortfolioInfoContext';
import { SkillsContextProvider } from './context/SkillsContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <PortfolioInfoContextProvider>
          <SkillsContextProvider>
            <App />
          </SkillsContextProvider>
        </PortfolioInfoContextProvider>
      </RootContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);