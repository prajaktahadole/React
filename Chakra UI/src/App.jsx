import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Sample } from './component/sample'
import { Gridd } from './component/grid' 
function App() {               
 
  return (
    <div className="App">
       <ChakraProvider>
       <Sample></Sample>
       <Gridd></Gridd>
     
    </ChakraProvider>
    </div>
  )
}

export default App
