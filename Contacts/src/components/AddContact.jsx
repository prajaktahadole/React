import React from 'react';
import { useState } from 'react';

 const AddContact = (props) =>{
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () =>{
    if (props.handleClick) props.handleClick(text, phone);
     setText("");
     setPhone("");
  };

  return (
    <div>
      <div>
      <input 
      value={text} 
      onChange={(e) => setText(e.target.value)}  
      placeholder="Name">
      </input>
      
      <input value={phone} 
      onChange={(e) => setPhone(e.target.value)}
       placeholder="Phone Number">
      </input>

     <div>
     <button onClick={handleClick}>ADD</button>
     </div>
      </div>
    </div>
  )
}
 
export default AddContact;