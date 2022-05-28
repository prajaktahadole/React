import { Box ,Center, Button, Stack, HStack, Container, Flex, VStack } from '@chakra-ui/react'
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

        <Container>
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production
        </Container>

        <Flex>
        {/* center -->center  flex ==> left start */}

            <Center flex={1}>1</Center>
            <Box flex={1}>2</Box>
            <Box flex={1}>3</Box>
            <Box flex={1}>4</Box>
        </Flex>

        <Stack 
        backgroundColor={["pink", "red" , "yellow", "green"]} 
        border={"1px solid"}
        w="100%"
        spacing={2}
        direction={["row" , "column"]}>
            <Box borderColor="black" border={"1px solid"}>you may check responsiveness </Box>
            <Box borderColor="black" border={"1px solid"}>Stack 2</Box>
            <Box borderColor="black" border={"1px solid"}>Stack 3</Box>
            <Box borderColor="black" border={"1px solid"}>Stack 4</Box>
        </Stack>
        
        <HStack spacing={2} 
        backgroundColor={{
        base : "yellow",
          sm:  "pink", 
          md : "blue" , 
          lg: "green", 
          xl : "teal"
        }} >
            <Box>S1</Box>
            <Box>S2</Box>
            <Box>S3</Box>
            <Box>S4</Box>

        </HStack>

        
        <VStack spacing={2} >
            <Box>S1</Box>
            <Box>S2</Box>
            <Box>S3</Box>
            <Box>S4</Box>

        </VStack>


        </Box>
      


        
    )
}
   