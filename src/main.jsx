import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BasketProvider from './context/BasketContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BasketProvider>
    <App />
  </BasketProvider>

)
