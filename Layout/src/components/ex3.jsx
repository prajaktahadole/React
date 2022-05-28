import { Box , Heading, Grid, GridItem} from "@chakra-ui/react"

function Example3 (){
    return (
       <Box>
            <Heading>LAYOUT - 3</Heading>

            <Grid
           h='1000px'
           templateRows='repeat(6, 1fr)'
           templateColumns='repeat(6, 1fr)'
           gap={4}>
              <GridItem  rowSpan={[1, 2, 2]} colSpan={[6 , 3, 3]} bg='sandybrown' ></GridItem>
              <GridItem  rowSpan={[1, 2 , 2]} colSpan={[6 , 3, 3]} bg='sandybrown' ></GridItem>
              <GridItem  rowSpan={[2, 2, 2]} colSpan={[6, 6, 6]} bg='tomato'></GridItem>
              <GridItem  rowSpan={[1, 1, 2]} colSpan={[6, 6 , 2]} bg='mediumslateblue'></GridItem>
              <GridItem  rowSpan={[1, 1, 2]} colSpan={[6, 6 , 2]} bg='mediumslateblue'></GridItem>
              <GridItem  rowSpan={[0, 0, 2]} colSpan={[6, 6 , 2]} bg='mediumslateblue'></GridItem>
          </Grid>


       </Box>
    )
}

export default Example3