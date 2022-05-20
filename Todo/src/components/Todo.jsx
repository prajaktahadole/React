import React from "react";


function Todo () { 
    const [title, setTitle] = React.useState("")
    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError , setIsError]= React.useState(false);
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        getTodos(page);
    }, [page]);

    
    const getTodos = (page = 1) =>{
        setIsLoading(true);
        return 
            fetch('https://json-server-mocker-masai.herokuapp.com/tasks')
            .then((res) => res.json())
            .then((res) =>{
                console.log(res);
                setData(res);
            })
            .catch((err)=>{
                setIsError(true);
            })

            .finally(() =>{
                setIsLoading(false);
            });    
    };

    const addTodos = (title) =>{
        const payload = {
            title,
            status : false
        }
        setIsLoading(true);
        return
        fetch('https://json-server-mocker-masai.herokuapp.com/tasks', {
           method : "Post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) =>{
            return getTodos();
            console.log(res);
            setData(res);
        })
        .catch((err)=>{
            setIsError(true);
        })
        .finally(() =>{
            setIsLoading(false);
        });
    };

    return isLoading ? (
        <div> ...loading</div>
    ) : isError ? (
        <div>Something went Wrong</div>
    ) : (
        <div>
        <div>
            <br/>
            <hr/>
        <input value={title} 
        onChange={(e) => setTitle(e.target.value)}  
        placeholder="Add Something" />

         <button onClick={() => addTodos(title)}>Add</button>
        </div>
        <ul>
            {data.map((item) =>(
               <li key={item.id}>{`${item.title} - ${item.status}`}</li> 
            ))}
        </ul>
        <h3>Page : {page}</h3>
     </div>
    )
       
    
}

export {Todo};