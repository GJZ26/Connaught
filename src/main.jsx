import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './Routes'
import './assets/stylesheets/GeneralStyle.css'

ReactDOM.createRoot(document.getElementById('principal-content')).render(
  <React.StrictMode>
    <RoutesApp/>
  </React.StrictMode>,
)
// 