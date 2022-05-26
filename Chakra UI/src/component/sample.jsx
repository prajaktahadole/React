import { Box ,Center, Button, Stack  } from '@chakra-ui/react'
import { MdBuild } from "react-icons/md"
import { useState } from 'react';


export const Sample =()=>{
    const [shrink , setShrink] = useState(false);
    return (
       <Box>

        <h1>CHAKRA UI</h1>
        <Box
        onClick={() => setShrink(!shrink)}
         bg='tomato'
          w='100%' 
        //   p={4} 
         p={shrink ? 4 : 8} 
         color='white'>
          This is the Box
        </Box>
        <Center  h='100px' color='black'>
        This is the Center
        </Center>

        <Stack spacing={4} direction='row' align='center'>

        <Button colorScheme='yellow' size='xs' >
            Button
        </Button>
        <Button  size='sm' variant='outline'>
            Button
        </Button>
        <Button colorScheme='green' size='md'>
            Button
        </Button>
        <Button colorScheme='teal' variant='ghost' size='lg'>
            Button
        </Button>

        <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
            Settings
        </Button>

        </Stack>



        </Box>
      


        
    )
}
   