function sum (a, b, mySecretKey){
    mySecretKey += "5";
    return a + b;
}
//export{sum};

//module.exports = sum;
//distribution



function myfunction (a){
    return a;
}
//export{myfunction}; 

export{myfunction, sum};
