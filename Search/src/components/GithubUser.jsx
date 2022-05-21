import React, { useState } from "react";
import axios from "axios";
import { useEffect , useState} from "react";


const getGithubUsers = ( q = "albseb511", page= 1) => {
    return axios("https://api.github.com/search/users", {
      params : {
          q,
          per_page : 5,
          page
      }  
    });
};



function Github() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("masai");
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    console.log(1);

    useEffect()

}