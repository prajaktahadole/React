import { SimpleGrid , Grid, GridItem, Container, Box  } from '@chakra-ui/react'



export  const Gridd =() =>{
    return (
       < Box>
        <SimpleGrid columns={2} spacing={10}>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>


        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>


        <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}>
          <GridItem rowSpan={[1,2]} colSpan={[2 , 1]} bg='red' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={2} bg='yellow' />
          <GridItem colSpan={4} bg='blue' />
        </Grid>

       </Box>
    )
}