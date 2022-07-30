import { Box, Center, Container, Heading , Stack, Text, VStack, Image, Skeleton, SkeletonCircle, SkeletonText, Avatar, SimpleGrid} from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react"



function GitHub (){

    const [loading, setloading] = useState(false);
    const [error , setError]=  useState(false);
    const [data, setData] =  useState([]);

    useEffect(()=>{
        setloading(true);
        axios({
             url : "https://api.github.com/search/users",
            method : "GET",
            params : {
                q : "masai",
                page : 1,
                perPage : 5
            }
        })
        .then(res =>{
            console.log(res)
            setData(res.data.items)
            setloading(false)
          })
          .catch(err =>{
              setloading(false)
              setError(true)
          })
    }, []); 

    console.log(data);


    return (
       <Skeleton isLoaded={!loading}>
           {/* create element in this way */}
            <Stack direction="row" padding="6" boxShadow='lg' bg="white">           
            <SkeletonCircle size='10' />    
            <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Stack>

        
            <Box p={2}>
            <Heading> Search</Heading>
            <SimpleGrid columns={2} gap={4}>
               {
                    data?.map(item => <GitHuBUserCard key={item.id} {...item}/>)
                }
            </SimpleGrid>
           </Box>
    
       </Skeleton>
    )
}

export default GitHub


const GitHuBUserCard =({
    avatar_url,
    login, 
    html_url 

}) =>{

   return (
        <Box >
            <Stack direction="row" boxShadow="lg" p={4} border="1px solid">
                <Center >
                {/* <Image w="100px"
                src={avatar_url}></Image> */}
                <Avatar w="60px"
                src={avatar_url} ></Avatar>
                </Center>

                <VStack maxW="100%" overflow="hidden">
                    <Heading>{login}</Heading>
                    <Text>{html_url}</Text>
                    
               
           </VStack>
            </Stack>
          
        </Box>
    )
}