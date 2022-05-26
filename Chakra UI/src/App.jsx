import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Sample } from './component/sample'
function App() {
 
  return (
    <div className="App">
       <ChakraProvider>
       <Sample></Sample>
     
    </ChakraProvider>
    </div>
  )
}

export default App
