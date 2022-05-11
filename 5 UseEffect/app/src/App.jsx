import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Hello } from './component/sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Hello></Hello>
       
    </div>
  )
}

export default App
