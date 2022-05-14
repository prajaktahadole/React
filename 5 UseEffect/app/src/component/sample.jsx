import { useState ,useEffect} from "react";


export const Hello = () =>{
   
    return ( 
       <div > Hello    </div>
    )
}    


export const Example2 = () =>{

    const [show, setShow] = useState(true);
    console.log("Before");

    useEffect(() =>{
        console.log("Inside effect 1");
    });

    useEffect(() =>{
        console.log("Inside effect 2");
    });


    console.log("After");

    return (
        "Hello World"
    )
}