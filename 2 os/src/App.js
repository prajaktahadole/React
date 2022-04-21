import logo from './logo.svg';
import './App.css';

function App() {

  const  os = ["Android", "Blackberry", "iPhone" , "Windows Phone" ];
  const Manufacturers = ["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div className="App">
     <div>
       <h1>Mobile Operating system</h1>
       {
         os.map((e) =>{
           return<Operating_sys os = {e}/>
         })
       }
     </div>
     <div>
       <h1>Mobile Manufacturers</h1>
       {
         os.map((e) =>{
           return<Mobile_Os Manufacturers = {e}/>
         })
       }
     </div>
    </div>
  );
}

function Operating_sys({os}){
  return <ul>
      <li>{os} </li>
  </ul>
}

function Mobile_Os({Manufacturers}){
  return <ul>
      <li>{Manufacturers} </li>
  </ul>
}


export default App;
