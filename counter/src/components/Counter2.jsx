import React from "react";

function Counter2 (){
    
    let [count, setCount] = React.useState(0);
    console.log(count, `inside function`)     // internnally it is changing but globally it is not

    const handleClickCorrectly = () =>{
       //setCount(count + 1);   
       setCount((prev) => prev + 1);  
       };

    const handleStartTimer = () =>{
        setInterval( () =>{
            console.log(count);   // every point it is zero, coz closure is form 
            // Closure -- it get exicuted in global scope
          //   setCount(count+ 1);
             setCount((prev) => prev + 1);   //<= to fix this issue we used
        }, 1000);
    };

    return(
        <div>
            <h3>COUNT {count}</h3>
            <button onClick={handleStartTimer}>Start Timer</button>
        </div>
    )   
}

export default Counter2;