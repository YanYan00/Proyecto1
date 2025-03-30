import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import InformationProvider from './context/InformationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <InformationProvider>
        <App />
      </InformationProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
