import React from "react";


export default function Counter(){

    const [countt, setCount] = React.useState(10);

    React.useEffect(() => {

        const id = setInterval(() => {

            setCount((prev) =>{                // to  fix steal state closure we can give callback
                if(prev === 0){
                    clearInterval(id);
                    return prev;
                }
                return prev -1; 
            })
            console.log('inside SetiInterval' , countt)      // this value remain same bcoz of steal state or steal closure

        }, 1000);
    }, []);

    return(
        <>
         <br></br>
         <hr></hr>
        <h1>Counter : {countt}</h1>
       
        </>
    )
}
