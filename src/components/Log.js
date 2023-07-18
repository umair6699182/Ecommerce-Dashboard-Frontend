import React, { useState } from 'react'
import { useEffect } from 'react';
// import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

export default function Log() {
  const [email, getemail] = useState("");
  const [password, getpassword] = useState("");
  let Navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      Navigate("/");
    }
  })





  const clickHandle = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      },
    })
     result = await result.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.email))
      localStorage.setItem("Token", JSON.stringify(result.auth))
      Navigate("/");
    }else {
      alert("No Email Found Please Register First")
    }
  }



  return (
    <div className='sign'>

      <h1>Login</h1>

      <input className='inputBox' type="email" onChange={(e) => getemail(e.target.value)} placeholder='Enter Email' value={email} />
      <input className='inputBox' onChange={(e) => getpassword(e.target.value)} type="password" placeholder='Enter Password' value={password} />
      <button type='button' onClick={clickHandle} className='btn'>Login Here</button>
    </div>
  )
}
