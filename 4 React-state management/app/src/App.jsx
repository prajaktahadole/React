//import logo from './logo.svg';
import './App.css';


/// 1 *********sending data from parent to child************////
// function App() {                                          /// parent function

//   const data = "hello c1"
//     return (
//        <div>
//         <First data= {data}/>
//         <Second/>
//       </div>
//     )
  
// };

// function First({ data }){                                   /// child function
//   console.log("Received from parent ," , data);
//   return <div>First Child</div>
// }
  
// function Second(){
//   return <div>Second Child </div>
// }  

// export default App;




///// 2 *****sending data from child to parent ***************************////////////////


// function App() {
                                             /// parent function
//   const handleChange = (value) =>{      ///this call back function 
//                                         //2- received data which pass in handle change function
//     console.log("hello", value)
//   }
//     return (
//        <div>
//         First {handleChange}             // 3 
//         <Second/>
//       </div>
//     )
  
// };

// function First(handleChange){            /// child function
//   const data = "test";                  //1 - handleChange function calling here while calling passing data to handlechange function from first function
//   handleChange(data)
//   return <div>First Child</div>
// }
  
// function Second(){
//   return <div>Second Child </div>
// }  

// export default App;





/// 2 ****same function we can write like this *////


// function App() {                   /// parent function

//   const getData = (data) =>{      ///this call back function 
//                                     //2- received data which pass in DataFn function
//     console.log("Got data from child :", data);
//   };
//     return (
//        <div>                                       
//          <First DataFn = {getData}/>            
//         <Second/>
//       </div>
//     ) 
// };

// function First({DataFn}){                    /// child function
//   const data = "hello c1";                  //1 - DataFn  function calling here while calling passing data to handlechange function from first function
//   DataFn(data);
//   return <div>First Child</div>
// }
  
// function Second(){
//   return <div>Second Child </div>
// }  

// export default App;






/// 3 ****sending data from 1 child to another child (sibling) *////

//re-render means recreating again

// import { useState } from "react";

// function App() {                   /// parent function
  
//   const [message, setMessage]  = useState ("");         //usestate intally empty bcoz of setmessage
//                                                       // setmessage  not only sets the value of msg but also triggers a re-render,
//                                                       // as it tell our component to recreate ourself again one more time, and while 
//                                                       // it is doing that update msg variable wherever it is used/ where ever is msg is get used it re render all those components

//                                                       /// we use this behaviour of setmsg to receive something from first in app and while sending it from app to second

//   const getData = (data) =>{      ///this call back function 
//                                     //2- received data which pass in DataFn function
//     console.log("Got data from child :", data);
//     setMessage(data);
//   };                                        

//                                           // here(124, 125 line) is both First and Second mention 
//                                           // so this is only way to send data from child 1 to child 2
//     return (
//        <div>                                       
//         <First DataFn = {getData}/>            
//         <Second message= {message}/>
//       </div>
//     );
// };

// function First({DataFn}){                    /// child function
//   const data = "hello c1";                  //1 - DataFn  function calling here while calling passing data to handlechange function from first function
//                                 //here is no mention of second 
//   return <div>
//     First Child
//     <button    
//       onClick={() => {
//       DataFn(data)
//     }
//     }>  
//     Send data
//     </button>
//   </div>
// }
  
// function Second({message}){
//   console.log("Got data from sibling :", message)
//   return <div>Second Child, {message} </div>           //here is no mention of first
// }  

// export default App;


import {Todo} from "./components/Todo";

function App(){
  return (
    <div className='App'>
        <Todo></Todo>
    </div>
  );
}

 export default App;
















































































































































































































