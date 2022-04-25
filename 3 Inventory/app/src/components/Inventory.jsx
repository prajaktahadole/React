import { useState } from "react";
import "./Inventory.css"

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens : 15
  });
    // Create add and remove functions here that changes the
    // state.
    const handlebook = (value) =>{

      if (inv + value < 0){
         return 
      }
      setCount(inv+ value);
  }
  const handleNotebook = (value) =>{

    if (inv + value < 0){
       return 
    }
    setCount(inv+ value);
  }

  const pens = (value) =>{

    if (inv + value < 0){
       return 
    }
    setCount(inv+ value);
}

const inkpens = (value) =>{

  if (inv+ value < 0){
     return 
  }
  setCount(inv+ value);
}







  return (
    <div className="istyle">
      <div className="items">
        <span>Books:{books} </span>
        <button onClick={()=> handlebook(1)} className="circlularButton">+</button>
        <button onClick={()=> handlebook(-1)} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{notebooks} </span>
        <button onClick={()=> handleNotebook(1)} className="circlularButton">+</button>
        <button onClick={()=> handleNotebook(-1)} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen:{pens} </span>
        <button onClick={()=> handlePen(1)} className="circlularButton">+</button>
        <button onClick={()=> handlePen(-1)} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens:{inkpens} </span>
        <button onClick={()=> handleInkPen(1)} className="circlularButton">+</button>
        <button onClick={()=> handleInkPen(-1)} className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {0}
    </div>
  );
};
