import { Box ,Grid,GridItem,Heading,VStack  } from "@chakra-ui/react"

function Example2 () {
    return(
       
      <Box>
        <Heading>LAYOUT - 2</Heading>
          <Grid
           h='300px'
           templateRows='repeat(3, 1fr)'
           templateColumns='repeat(3, 1fr)'
           gap={4}>
              <GridItem  rowSpan={[1, 2]} colSpan={[3, 2]} bg='mediumpurple' ></GridItem>
              <GridItem  rowSpan={[1, 1]} colSpan={[3, 2]} bg='lightskyblue'></GridItem>
              <GridItem  rowSpan={[1, 3]} colSpan={[3, "auto"]} bg='tomato'></GridItem>
          </Grid>
      </Box>

    )
}

export default Example2