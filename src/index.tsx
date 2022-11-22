import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChartGenerator } from 'react-dvis-test'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <ChartGenerator data={[]} config={{types: {}, names: {}, format: {}}} />
    </div>
  </React.StrictMode>,
)