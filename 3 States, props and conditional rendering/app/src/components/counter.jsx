import { useState } from "react";

function Counter(){

 //useState it comming through react
 // const [count] = useState(10);  // create variable count which gonna be change
 const [count, setCount] = useState(0);  // second setSomething is always be the function
                                        // setCounter set the value for counter whenever it get call
 const [name , setName] = useState("India");


 const handleAdd = () => {
    if(count >= 10 ){
        return ;
    }
 setCount(count+1);
 };


 const handleSub = () => {  
    if(count <= 0){
        return 
    }
    setCount(count-1);
}


const handleChange = (value) =>{

    if((count + value ) > 10 || (count + value )< 0){
       return 
    }
    setCount(count+ value);
}


   return (
    <div className="counter">
    <h1>Match : {name}</h1>
    <h2>Counter :{count}</h2>
    
    {  //Instead of this we can write in handle way
    
    /* <button onClick={()=>{
     //  setCount(15);   // it set the value of count 15 , it always set to 15

        if(count >= 10){
            return;
        }
         setCount(count+1);
    }}>Add 1</button>

    <button onClick={() =>{

        if(count <= 0){
            return;
        }
        setCount(count-1);
    }
    }>Sub 1</button> */}

    <button onClick={handleAdd}>Add 1</button>
    <button onClick={handleSub}>Sub 1</button>

   
   
   
  <div>  **********OR using only one change function***********</div>


        <div>
            <button onClick={()=> handleChange(1)}>Add 1</button>
            <button onClick={()=> handleChange(-1)}>Sub 1</button>
            <div className="">Number is {count% 2 === 0 ? "Even" : "Odd"}</div>
        </div>


</div>
   )
}








export{Counter}