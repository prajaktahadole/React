import { useState } from "react";

export const Inventory = () => {
  const [bookcount, setbookcount] = useState(10);
  const [notebookcount, setnotebookcount] = useState(13);
  const [pencount, setpencount] = useState(40);
  const [inkpencount, setinkpencount] = useState(10);

  const bookAddHandle = (value) => {
    if(bookcount >= 0){
        setbookcount(bookcount + value);
    } else {
        setbookcount(bookcount);
    }
  }

  const bookSubHandle = (value) => {
    if(bookcount > 0){
        setbookcount(bookcount - value);
    } else {
        setbookcount(bookcount);
    }
  }

  const notebookAddHandle = (value) => {
      setnotebookcount(notebookcount + value);
  }

  const notebookSubHandle = (value) => {
      if(notebookcount > 0){
        setnotebookcount(notebookcount - value);
      } else{
        setnotebookcount(notebookcount)
      }
  }

  const penAddHandle = (value) => {
      setpencount(pencount + value);
  }

  const penSubHandle = (value) => {
      if(pencount > 0){
        setpencount(pencount - value);
      } else{
        setpencount(pencount)
      }
    
  }


  const inkpenAddHandle = (value) => {
      setinkpencount(inkpencount + value);
  }

  const inkpenSubHandle = (value) => {
    if(inkpencount > 0){
        setinkpencount(inkpencount - value);
    }
    else {
        setinkpencount(inkpencount);
    }
    
 }


    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => {
            bookAddHandle(1);
        }}>+</button>
        <button className="circlularButton" onClick={() => {
            bookSubHandle(1);
        }}>-</button>
        <span>{bookcount}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => {
            notebookAddHandle(1);
        }}>+</button>
        <button className="circlularButton"onClick={() => {
            notebookSubHandle(1);
        }}>-</button>
        <span>{notebookcount}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => {
            penAddHandle(1);
        }}>+</button>
        <button className="circlularButton" onClick={() => {
            penSubHandle(1);
        }}>-</button>
        <span>{pencount}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={() => {
            inkpenSubHandle(1);
        }}>+</button>
        <button className="circlularButton" onClick={() => {
            inkpenSubHandle(1);
        }}>-</button>
        <span>{inkpencount}</span>
      </div>
            {/*calculate total and show it*/}
      total: {bookcount + pencount + notebookcount + inkpencount}
    </div>
  );
};