import { useState ,useEffect} from "react";


export const Hello = () =>{
   
    return ( 
       <div > Hello  </div> 
    )
}    






export const Example2 = () =>{

    const [count, setCount] = useState(0);
    console.log(count);
    console.log("Before");
                                                        /// it 1st print 1 and 2 , then it goes inside the useEffect 
    // mounting phase                                                   // and print Inside effect 1,   Inside effect 2                                                   
    useEffect(() =>{                                    // it means React will run  this useEffect code after the UI shown to the user                
        console.log("Inside effect 1");
    } , []);
    // [] which means no dependancies, in this case useEffect get called only once

    useEffect(() =>{
       // console.log("Inside effect 2");
        document.title = `you have clicked ${count} times`
    },[count]);   // put dependacy inside dependancy array if their are multiple useEffect


    console.log("After");

    return (
      <div>
            <br></br>
             <hr></hr>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count+1)}>ADD</button>
      </div>
    )
}