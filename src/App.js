

// import React, { useState } from "react";
// import './App.css'

// const App = () => {
//   const [newInput, setInput] = useState("");
// const [submittedInputs, setSubmittedInputs] = useState([]);

   
//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//   setSubmittedInputs([...submittedInputs, newInput])
//     setInput("");
//   };

//   const onChangeHandler = (e) => {
//     setInput(e.target.value);
 
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmitHandler} >
//         <div>
//           <label htmlFor="typo">Enter : </label>
//           <input
//             type="text"
//             id="typo"
//             onChange={onChangeHandler}
//             value={newInput}
//           />
//         </div>

//         <div>
//           <button>Click</button>
//         </div>
//       </form>


//       <div>
//         <h2>Submitted Inputs:</h2>
//        <ul>
//         {submittedInputs.map((input, index)=>
//           <li key={index}>{input}</li>
//         )}
//        </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";

import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedInputs, setSubmittedInputs] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmittedInputs([...submittedInputs, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        
        <div>
          <button type="submit">Click</button>
        </div>
      </form>

      <div>
        <h2>Submitted Inputs:</h2>
        <ul>
          {submittedInputs.map((input, index) => (
            <li key={index}>
              Name: {input.name}, Email: {input.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
