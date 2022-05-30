import {useEffect , useState} from "react";
import axios from "axios";

function Users(){
    const [loading , setLoading ] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        setLoading(true)
        axios({
            url : "https://reqres.in/api/users",
            method : "GET"
        })
        .then((res) =>{
            setLoading(false)
            setData(res.data)
        })
        .catch((err) =>{
            setLoading(false)
        });
    }, []);

    return (
        <div>
            {loading && <div>Loading</div>}
            
            {data.map((item) =>(
                <div>{item.email}</div>
            ))}
        </div>
    )

}

export default Users;