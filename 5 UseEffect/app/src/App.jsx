import { useState } from 'react'
import './App.css'
import { Hello, Example2} from './component/sample';
import Counter from './component/countdown';

function App() {
 
  const [show, setShow ] = useState(true);
  return (
    <div className="App">
     
     <div>
     {show ? <Hello/>: null}
       <button onClick={() =>{
           setShow(!show);
       }}>Toggle component</button>
     </div>

       <div>
       <Example2></Example2>
       </div>


       <div>
         <Counter></Counter>
       </div>


      

       
      
     
    </div>
  )
}

export default App
