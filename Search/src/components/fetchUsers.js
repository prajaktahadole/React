import axios from "axios";

function fetchUsers(query , page){

    if(!query){
        return Promise.reject("query should be provioded ")
    }
    return axios.get("https://api.github.com/search/users", {
        params : {
            q : query               // using get request pass params
        }
    });
}

export {fetchUsers} 