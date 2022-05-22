import React, { useState } from "react";
import { fetchUsers } from "./fetchUsers";

const Github = ()=>{
    const [query, setQuery] = useState("");
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(false);
    const [users , setUsers] =   useState([]);
    

    React.useEffect(() =>{
        setIsLoading(true);
        setIsError(false);
        fetchUsers("masai")
        .then((res)=>{
            setUsers(res.data.items);
        })
        .catch((err) =>{
            setIsError(true);
        })
        .finally( () =>{
            setIsLoading(false);
        });
    }, [])



    const handleSearch = () =>{
        setIsLoading(true);
        setIsError(false);
        fetchUsers(query)
        .then((res)=>{
            setUsers(res.data.items);
        })
        .catch((err) =>{
            setIsError(true);
        })
        .finally( () =>{
            setIsLoading(false);
        });
    };

    return (
       <div id="search">
            <h1>GitHub</h1>
        <div>
            <input 
             value={query}
             onChange={(e) => setQuery(e.target.value)} 
             placeholder="search"
            />
            <button disabled={isLoading} onClick={handleSearch}>
                {isLoading ? "loading" : "SEARCH"}
                </button>
        </div>
        {isError ? "please fill te text" : null}
        <div>
            {users?.map((item) =>(
                <div key={item.id}>{item.login}</div>
            ))}
        </div>
       </div>
    )
}


export {Github};