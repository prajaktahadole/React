import { Grid, GridItem, Center, Box } from "@chakra-ui/react"

export const Example1 = () =>{
    return (
        <Box border={"1px solid red"} m="5px 0px" p="30px">
      <Grid
        templateRows = "repeat(3, 200px)"
        templateColumns = "repeat(3, 1fr)"
        gridTemplateAreas={[
             `"a a a a" 
              "c c c c"
              "b b b b"`,
             `"a b b c"
              "a b b c"
              "a b b c"`
            ] }
            w="70%"
            m="auto"
    
       >
        <GridItem  bg="#0172bb" gridArea="a">
          <Center h="100%">NAV</Center>
        </GridItem>
        <GridItem bg="#f8942d" gridArea="b" >
          <Center h="100%">CONTENT</Center>
        </GridItem>
        <GridItem  bg="#ef4327" gridArea="c">
          <Center h="100%">WIDGET</Center>
        </GridItem>
      </Grid>
    </Box>
    )
}

