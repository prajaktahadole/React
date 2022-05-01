// this is for styling that item

export const TodoItem = ({todo, handlestatus}) =>{            // here todo is obj
    return(
        <div>
            <div>{todo.id}</div>
            {todo.title} - {todo.status ? "done" : "not done"}
            <button onClick={()=> handlestatus(todo.id)} > Toggle </button>
        </div>
    );
};