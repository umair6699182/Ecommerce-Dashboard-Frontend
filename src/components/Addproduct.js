import React, { useState } from 'react'

export default function Addproduct() {

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [catogory, setcatogory] = useState("");
  const [company, setcompany] = useState("");

  const Addproduct = async () =>  {
    let userid = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method:"POST",
      body:JSON.stringify({name,price,catogory,company,userid}),
      headers:{
        "Content-Type": "application/json"
      }
    });

    result = await result.json();
    alert("Your Product Hass Been Add")
    console.log(result);
    
  }

  return (
    <div className='sign'>
      <h1>Add Product</h1>
      <input type="text" value={name} className='inputBox' onChange={(e) => setname(e.target.value)} placeholder='Enter Product Name' />
      <input type="text" value={price} className='inputBox' onChange={(e) => setprice(e.target.value)} placeholder='Enter Product Price' />
      <input type="text" value={catogory} className='inputBox' onChange={(e) => setcatogory(e.target.value)} placeholder='Enter Product Catogory' />
      <input type="text" value={company} className='inputBox' onChange={(e) => setcompany(e.target.value)} placeholder='Enter Product Company' />
      <button type='button' onClick={Addproduct} className='btn'>Add Product</button>
    </div>
  )
}
