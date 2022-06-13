import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import {AuthContextProvider} from "./Contexts/AuthContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* to tell you app where to go or what to load */}
      <AuthContextProvider>
        {/* to give a value anywhere in your app */}
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>

)
