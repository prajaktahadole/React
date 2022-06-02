import React, { useReducer } from "react";

const initState = {
    counter : 0,
    noOfClick : 0
};

const counterAction = {
    increment : "increment",
    decrement : "decrement",
}



const reducer = (state, action) =>{

    switch(action.type){
        case "increment" : {
            return{
                ...state,
                counter : state.counter + 1
            };
        }
        case "decrement" : {
            return {
                ...state,
                counter : state.counter - 1
            };
        }
        default : 
        return state;
    }
};


function Counter(){
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state);


    return(
        <div>
            <h2>{state.counter}</h2>
            <div>
                <button
                onClick={() =>
                dispatch ({
                    type : counterAction.increment
                })
            }
            >ADD</button>

            <button
                onClick={() =>
                dispatch ({
                    type : counterAction.decrement
                })
            }
                >REDUCE</button>
            </div>
        </div>
    );
}