import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './index.css'
import App from './App';
import { RootContextProvider } from './context/RootContext';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RootContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);