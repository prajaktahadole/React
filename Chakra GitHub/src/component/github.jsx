import { Box, Center, Container, Heading , Stack, Text, VStack, Image} from "@chakra-ui/react"
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
        <Container>
            <Box>
            <Heading>GitHub Search</Heading>
            {
                data?.map(item => <GitHuBUserCard key={item.id} {...item}/>)
            }
         
           </Box>
        </Container>
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
                <Image w="100px"
                src={avatar_url}></Image>
                </Center>

                <VStack>
                    <Heading>{login}</Heading>
                    <Text>{html_url}</Text>
                    
               
           </VStack>
            </Stack>
          
        </Box>
    )
}