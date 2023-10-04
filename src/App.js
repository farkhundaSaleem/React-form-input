


import React, { useState } from 'react'
import './App.css'
const App = () => {


const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[number,setNumber]=useState("");
const[submittedInputs,setSubmittedInputs]=useState([])
const onSubmitHandeler=(e)=>{
  e.preventDefault();
  setSubmittedInputs([...submittedInputs, {name, email, number}]);
  setName("");
  setEmail("");
  setNumber("");
}


  return (
    <>
    <form onSubmit={onSubmitHandeler}>
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text"  id="name" value={name}
         onChange={(e)=>{ setName(e.target.value)

        }}/> 
       
        <label htmlFor="email">Email : </label>
        <input type="email"  id="email" value={email}
         onChange={(e)=>{ setEmail(e.target.value)

        }}/>
       
        <label htmlFor="number">Contact No : </label>
        <input type="number"  id="number" value={number}
         onChange={(e)=>{ setNumber(e.target.value)

        }}/>
       
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>

<div>
<h3>Submitted Inputs</h3>
{submittedInputs.map((input, index)=>
<ul key={index}>
  <li>Name :{input.name} <br />Email :{input.email} <br /> Contact No :{input.number}</li>
</ul>)}
</div>



</>


  )




}

export default App

