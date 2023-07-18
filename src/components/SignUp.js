import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/")
    }
  })






  const collect = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: 'POST',
      body: JSON.stringify({ name, email, password }) ,
      headers: {
        'Content-Type':'application/json'
      },
    })

    // console.log(await result.json());
    result = await result.json();
    // console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/")
    }
  }
  return (
    <div className='sign'>

      <h1>Register</h1>
      <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
      <input className='inputBox' type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter Email' />
      <input className='inputBox' type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter Password' />
      <button type='button' onClick={collect} className='btn'>Sign Up</button>
    </div>
  )
}
