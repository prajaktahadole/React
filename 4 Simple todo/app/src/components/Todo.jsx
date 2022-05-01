import { useState } from "react";
import { TodoInput} from "./Todoinput";
import {TodoItem} from "./Todoitem";


function Todo(){

    const [todoList, setTodolist] = useState([]);
    
    const getData = (todo) =>{
      //  console.log("Received" , todo)   // 3 - receiving data to parent 
        // here we receiving todo i.e input text is in form of string

       const payload = {
           title : todo,
           status : false,
           id : Math.floor(Math.random() * Date.now())
       }
          setTodolist([...todoList, payload])  // sending data as in form of obj;
    };

    const handlestatus = (id) =>{
        console.log("id" , id); 
         const newarr = todoList.map(e =>{
             if(e.id === id){
                 return {
                     ...e,
                     status : !e.status
                 }
             }
             return e;
         })            //find this id from todolist
         setTodolist(newarr);
       
         // toggle its status
        // get new array, set it again.
    }


    return (
        <div>
           < TodoInput  getData={getData}/>
           {/* Todolist           4- adding data in todo*/ }
           { todoList.map((e) => (
               //<div>{e}</div>
               <TodoItem handlestatus={handlestatus} todo = {e}></TodoItem> // here recieve  the item handlestatus
           ))}
       </div>
    );
}

export {Todo};