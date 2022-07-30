import { Grid, GridItem, Center, Box, Stack, Heading } from "@chakra-ui/react"

export const Example1 = () =>{
    return (
       
      
      <Stack

         w="100%"
         m="auto"
         h="600px"
        direction={["column", "row" ]}
    >
       
        <Box backgroundColor={
              ["rgb(0,114,187)", 
              "rgb(0,114,187)"]
            } 
            
            h={["200px" , "100%" ]}
            >
          <Center h="100%">NAV</Center>
        </Box>
        <Box 
          backgroundColor={
            ["rgb(238,28,37)", 
            "rgb(248,147,29)"]
            } 
            w={[ "100%", "45%"]}
            h={["200px" , "100%" ]}
            >
          <Center h="100%">
              
            {["WIDGET"]}
              
        </Center>
        </Box>

        <Box   backgroundColor={
           [ "rgb(248,147,29)", 
            "rgb(238,28,37)"]
            } 
            w={[ "100%", "25%"]}
            h={["400px" , "100%"  ]}
            >
          <Center h="100%">
          {["CONTENT"]}
          </Center>
        </Box>
      </Stack>
   
    )
}

