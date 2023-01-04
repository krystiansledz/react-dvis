import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Routes, Route } from 'react-router';
import Generator from './Generator';

function App() {
  const theme = createTheme({});

  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path={'*'} element={<Generator />} />
          </Routes>
        </ThemeProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
