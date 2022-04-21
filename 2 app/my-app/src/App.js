import logo from './logo.svg';
import './App.css';

function App() {

  const food = "Pizza";
  const age = 19;
  const skills = ["Mern", "Node", "DSA", "Design", "Animation"];

  return (
    <div className="App">

    <button>practice</button>
    <input/>
    <img src="https://pbs.twimg.com/card_img/1512304894878830595/I3t9CYv-?format=png&name=medium" alt="missing" id="img1"/>

    <div>
      your fav food is {food}
      <div>you are {age > 18 ? "Eligible": "Not Eligible"} for license</div> 
    </div>

    <Skill skill="Adv JS"/>
    <div>
      Your skills :
     {/* { <ul>
     {skills.map((e)=>{
        return <li>{e}</li>
      })}
     </ul> 
     } */}
    {/* {
      skills.map((e)=>{
        return <p className="redtext">skill : {e}</p>;  //here all things are same except e 
      })
    } */}

    {
      skills.map((e) =>{
        return <Skill  skill={e}/>
      })
    }
    </div>

    <Skill skill="vscode"/>
    </div>
  );
}


//component

function Skill({skill}){
  console.log("skills :", skill)
  return <p className="redtext">skill : {skill}</p>;
}

export default App;



