
import React from "react";
import ReactDOM from "react-dom";


import "./index.css";


// const root = document.getElementById("root");

// ReactDOM.render(
//     "Hello react",      //what to render 
//     document.getElementById("root")   //where to render

// )

//instead of above code we can write in 1 line;
// const h1 = React.createElement("h1", {"className" :"redtext"}, "hello React")
//  ReactDOM.render(
//      h1,      //what to render 
//     document.getElementById("root")   //where to render
//  );
    


 ///element inside element h1 inside p

const h1 = React.createElement("h1", {"className" :"redtext"}, "Hello React!");
const div = React.createElement("div", {} , "Hello Div");
const img = React.createElement("img" , {src: "https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png"});


const toShow = true; //if toShow is true image is visible, else  it is false image is not visible;


 const p = React.createElement(
 "p",
 {"className" :"para" , id : "unique"}, 
 [h1, 
 div,
 "text abc",
 toShow ? img : null, 
 h1]); 

 ReactDOM.render(
     p,      //what to render 
    document.getElementById("root")   //where to render
 );