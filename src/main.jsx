import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global.js'
import { Routes } from "./routes"
import { AuthProvider } from './hooks/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  </React.StrictMode>,
)
