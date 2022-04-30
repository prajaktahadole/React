//import logo from './logo.svg';
import './App.css';



///*********sending data from parent to child************////
// function App() {

//   const data = "hello c1"
//     return (
//        <div>
//         <First data= {data}/>
//         <Second/>
//       </div>
//     )
  
// };

// function First({ data }){
//   console.log("Received from parent ," , data);
//   return <div>First Child</div>
// }
  
// function Second(){
//   return <div>Second Child </div>
// }  

// export default App;




/////*****sending data from child to parent ***************************////////////////


// function App() {

//   const handleChange = (value) =>{      ///this call back function 
//                                         //2- received data which pass in handle change function
//     console.log("hello", value)
//   }
//     return (
//        <div>
//         First {handleChange}
//         <Second/>
//       </div>
//     )
  
// };

// function First(handleChange){
//   const data = "test";                  //1 - handleChange function calling here while calling passing data to handlechange function from first function
//   handleChange(data)
//   return <div>First Child</div>
// }
  
// function Second(){
//   return <div>Second Child </div>
// }  

// export default App;



///****same function we can write like this *////


function App() {

  const getData = (data) =>{      ///this call back function 
                                    //2- received data which pass in DataFn function
    console.log("Got data from child :", data);
  };
    return (
       <div>
         <First DataFn = {getData}/>
        <Second/>
      </div>
    ) 
};

function First({DataFn}){
  const data = "hello c1";                  //1 - DataFn  function calling here while calling passing data to handlechange function from first function
  DataFn(data);
  return <div>First Child</div>
}
  
function Second(){
  return <div>Second Child </div>
}  

export default App;






















































































































































































































