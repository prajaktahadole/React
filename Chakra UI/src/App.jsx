import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function App() {
 
  return (
    <div className="App">
       <ChakraProvider>
       <Box bg='tomato' w='100%' p={4} color='white'>
          This is the Box
        </Box>
      <h1>CHAKRA UI</h1>
    </ChakraProvider>
    </div>
  )
}

export default App
