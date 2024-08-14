import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MenuWrapper } from './context/menuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuWrapper>
    <App />
    </MenuWrapper>
  </React.StrictMode>,
)
