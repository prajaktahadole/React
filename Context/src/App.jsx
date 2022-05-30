import { useState } from 'react'
import './App.css';
import AppContextProvider from './component/AppContext/AppContextProvider';

function App() {

  return (
    <div className="App">
    "hello app"
    <AppContextProvider></AppContextProvider>
    
    </div>
  )
}

export default App
