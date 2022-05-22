import { useState } from 'react'
import './App.css'
import { Github } from './components/Github'
import { Login } from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Github></Github>
     <Login></Login>
    </div>
  )
}

export default App
