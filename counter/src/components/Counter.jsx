import React from "react";

function Counter1 (){
    
    let [count, setCount] = React.useState(0);

    const handleClick = () => {
        console.log(++count);
    }

    const handleClickCorrectly = () =>{
         setCount(count + 1);
       // internally it works like this below function
       // setCount((prev) => prev +1);   /// when we used this callback  we does not dependant on that passed value,
       // we depandant on internal value that we stored in state.
       // both work expect some cases like setinterval
       // 1 - setCount(value)
       // 2 - setCount(updaterFuncCallback)
       // 3 - updaterFuncCallback = function(count prev){}
    };

    return(
        <div>
            <h3>COUNT {count}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClickCorrectly}>Add Correctly</button>
        </div>
    )   
}

export default Counter1;