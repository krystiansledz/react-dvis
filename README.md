# react-dvis

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

[**Live Demo**](https://krystiansledz.github.io/react-dvis/)

## Installation:

```bash
npm install react-dvis
```

or

```bash
yarn add react-dvis
```

## Usage :

```js
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from 'Amui/x-date-pickers'
import { AdapterLuxon } from 'Amui/×-date-pickers/AdapterLuxon'
import { Routes, Route } from 'react-router'
import { ChartGenerator } from 'react-dvis'

const data = [
  {
    date: '2022-12-13T01:00:00Z',
    value: 10,
  },
  {
    date: '2022-12-14T01:00:00Z',
    value: 15,
  },
  {
    date: '2022-12-15T01:00:00Z',
    value: 13,
  },
  {
    date: '2022-12-16T01:00:00Z',
    value: 16,
  }
]

// generated using Config Generator
const config = {
  types: {
    date: 'DATE',
    value: 'NUMBER',
  },
  names: {
    date: 'date',
    value: 'value',
  },
  format: {
    date: 'DD_MM_VYYY',
    value: 'default',
  }
}

function App() {
  const theme = createTheme({})

  return (
    <HashRouter>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/*" 
              element={<ChartGenerator data={data} config={config} />}
            />
          </Routes>
        </ThemeProvider>
      </LocalizationProvider>
    </HashRouter>
  )
}

export default App;

```

[npm-url]: https://www.npmjs.com/package/react-dvis
[npm-image]: https://img.shields.io/npm/v/react-dvis
[github-license]: https://img.shields.io/github/license/krystiansledz/react-dvis
[github-license-url]: https://github.com/krystiansledz/react-dvis/blob/master/LICENSE
[github-build]: https://github.com/krystiansledz/react-dvis/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/krystiansledz/react-dvis/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-dvis