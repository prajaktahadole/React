import React from "react";
import { useState } from "react";
import { loginUser } from "./loginUser";


const Login = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [isAuth, setIsAuth]  = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(false);
   

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsLoading(true);
        setIsError(false);
        loginUser({email, password})
        .then((res) =>{
            setIsAuth(true)
            setToken(res.data.token)
        })
        .catch((err) =>{
            setIsError(true)
        })
        .finally(() =>{
            setIsLoading(false);
        });
          
    };

    if(isAuth){
        return(
            <div>
                <h1>Welcome to the dashboard</h1>
                <h3>Token : {token}</h3>
            </div>
        )
    }



    return (
        
        <div id="login">
           <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            {isError && "something went wrong"}
            <div>
                <label>  
                    Email :{" "}
                   <input
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                   />
                </label>
            </div>

            <div>
                <label>
                    Password : {""}
                    <input 
                     type="password"
                     placeholder="Password"
                     onChange={e => setPassword(e.target.value)}
                   />
                </label>
            </div>

            <div>
                <input type="submit"/>
                
            </div>


        </form>
        </div>
    )


}

export {Login}


// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
// {
//     "token": "QpwL5tke4Pnpja7X4"
// }