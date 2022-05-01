import { useState } from "react";
// todoinput is the child of todo

export const TodoInput = ({getData}) =>{

    const [text, setText] = useState(" ");   
      // 1 - receiveing the data
    return (
        <div>
        <input onChange={(e) =>{
           // console.log(e.target.value);
            setText(e.target.value);    
        }}
         type="text"
         placeholder="Enter Todo">
         </input>

        <button 
            onClick={() =>{
                getData(text);   // 2 - passing the data
            }}
            >
            
            Add Todo
            </button>
         {/* Todos List */} 
         {text}
    </div>
    );
}
