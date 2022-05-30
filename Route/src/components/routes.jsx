import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import Login  from "./login";
import About  from "./about";
import Navbar from "./Navbar";

function RouteFun (){
    return (
       <>
       <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>                     
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
       </>
    )
} 

export default RouteFun;