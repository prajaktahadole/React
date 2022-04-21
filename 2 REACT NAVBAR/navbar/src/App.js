import './App.css';

function App() {
  const arr = ["Services", "Projects", "About"];

  
  return (
    <div id="main">
      <div id="left">
        <p>LogoBakery</p>
      </div>

      <div id="mid">
      
        {arr.map((e) => {
          return <Tag res = {e} />;
        })}
      </div>

     <div id="right">
     <button id="btn">Contact</button>
     </div>
    </div>
  );
}

function Tag({res}) {
  return <div>{res}</div>
}

export default App;