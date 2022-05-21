import { useState } from 'react'
import './App.css'
import { Github } from './components/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Github></Github>
    </div>
  )
}

export default App
