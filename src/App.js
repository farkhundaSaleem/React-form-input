

import React, { useState } from "react";
import './App.css'

const App = () => {
  const [newInput, setInput] = useState("");
const [submittedInputs, setSubmittedInputs] = useState([]);

   
  const onSubmitHandler = (e) => {
    e.preventDefault();
  setSubmittedInputs([...submittedInputs, newInput])
    setInput("");
  };



  return (
    <div>
      <form onSubmit={onSubmitHandler} >
        <div>
          <label htmlFor="typo">Enter : </label>
          <input
            type="text"
            id="typo"
            onChange={(e)=>setInput(e.target.value)}
            value={newInput}
          />
        </div>
      <div>
          <button>Click</button>
        </div>
      </form>


      <div>
        <h2>Submitted Inputs:</h2>
       <ul>
        {submittedInputs.map((input, index)=>
          <li key={index}>{input}</li>
        )}
       </ul>
      </div>
    </div>
  );
};

export default App;


