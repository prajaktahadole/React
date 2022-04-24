import "./counter.css"
import { useState } from "react";

function Counter(){

const [count, setCount] = useState(0);
    
const handleChange = (value) =>{
    if(value === 2){
        setCount(count * 2); 
    }else{
        setCount(count + value);
    }
    
}


    return <div  >
        <h1 className={`${count % 2 === 0 ? "red" : "green"}`}>Counter :{count}</h1>
        <button onClick={()=> handleChange(1)}>Increament</button>
        <button onClick={()=> handleChange(-1)}>Decrement</button>
        <button onClick={()=> handleChange(2)}>Double</button>
        <div className={count % 2 === 0 ? 'green' : 'red'}>Number is:{count%2===0 ? "Even": "Odd"}</div>
    </div >
}

export{Counter}