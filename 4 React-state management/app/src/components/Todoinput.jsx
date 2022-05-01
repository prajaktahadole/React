import { useState } from "react";
// todoinput is the child of todo

export const TodoInput = ({getData}) =>{

    const [text, setText] = useState(" ");   //to display on screen
    // we need this text to be push in  todolist on clicking add todos button
    // 1 - receiveing the data
    return (
        <div>
        <input onChange={(e) =>{
           // console.log(e.target.value);
            setText(e.target.value);       // whenever we changing the value of input box settext take the value of input box and set it on to do the input box 
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
