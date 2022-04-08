// import {sum } from "./calc";
import {myfunction, sum } from "./calc";

import "./index.css";


const mySecretKey = "12345"
console.log("stuff")
console.log(sum(1,3, mySecretKey));


// import { myfunction } from "./calc";
console.log(myfunction("my function webpack"))


console.log(sum(7,4));



//************css html**********//

const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.classList.add("redtext");  // or set attriibute
// h1.setAttribute("class", "redtext");

root.append(h1);   // or root.appendChild(h1)
