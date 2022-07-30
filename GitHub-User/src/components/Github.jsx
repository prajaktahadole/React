import React, { useState } from "react";
import { fetchUsers } from "./fetchUsers";


const Github = ()=>{
    const [query, setQuery] = useState("");
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(false);
    const [users , setUsers] =   useState([]);
    const[page,setPage]=useState(1)
    
    React.useEffect(() =>{
        setIsLoading(true);
        setIsError(false);
        fetchUsers("")
        .then((res)=>{
            setUsers(res.data.items);
        })
        .catch((err) =>{
            setIsError(true);
        })
        .finally( () =>{
            setIsLoading(false);
        });
    }, [query, page])



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
        <div>
          <button disabled={page==1} onClick={()=>{setPage(page-1)}}>prev</button>
          <button onClick={()=>{setPage(page+11)}}>Next</button>
        </div>
       </div>
    )
}


export {Github};