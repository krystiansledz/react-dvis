import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Routes, Route } from 'react-router';
import Example1 from './Example1';
import Example2 from './Example2';
import Nav from './Nav';
import Generator from './generator/wizard';

function App() {
  const theme = createTheme({});

  useEffect(() => {
    // data
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'X-Redmine-API-Key': `${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    };

    fetch(`https://kompas.fis.agh.edu.pl/projects/dzial-obslugi-technicznej/issues.json`, options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <HashRouter>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
          <div style={{ width: '100%', padding: '2rem', paddingLeft: '232px' }}>
            <Routes>
              <Route path={'/example1/*'} element={<Example1 />} />
              <Route path={'/example2/*'} element={<Example2 />} />
              <Route path={'*'} element={<Generator />} />
            </Routes>
          </div>
        </ThemeProvider>
      </LocalizationProvider>
    </HashRouter>
  );
}

export default App;
