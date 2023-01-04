import React from 'react';
import { HashRouter, useLocation } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Routes, Route } from 'react-router';
import Generator from './Generator';

function App() {
  const theme = createTheme({});
  const location = useLocation();

  return (
    <HashRouter>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {JSON.stringify(location)}
          <Routes>
            <Route path={'/package'} element={<Generator />} />
          </Routes>
        </ThemeProvider>
      </LocalizationProvider>
    </HashRouter>
  );
}

export default App;
