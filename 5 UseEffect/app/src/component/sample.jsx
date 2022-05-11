import { useState } from "react";


export const Hello = () =>{
    const [show, setShow ] = useState(true);
    return (
       <div > {show ? <Hello/> : null}Hello
       <button onClick={() =>{
           setShow(!show);
       }}>Toggle</button>
       
       </div>
    )
}    