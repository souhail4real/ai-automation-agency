import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App bootstrap entrypoint. Keep global providers here as the app grows. */}
    <App />
  </React.StrictMode>,
)
