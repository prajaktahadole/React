import { useState } from "react";
import { TodoInput} from "./Todoinput";

// to add list of todos 
/// parent
 
function Todo(){

    const [todoList, setTodolist] = useState([])
    
    const getData = (todo) =>{
        console.log("Received" , todo)   // 3 - receiving data to parent 
        setTodolist([...todoList, todo])   // this new syntax is called spread operator 
        // it copy the entire todo array into new array and add new todo element in it.
    };
    return (
        <div>
           < TodoInput  getData={getData}/>
           {/* Todolist           4- adding data in todo*/ }
           { todoList.map((e) => (
               <div>{e}</div>
           ))}
       </div>
    );
}

export {Todo};