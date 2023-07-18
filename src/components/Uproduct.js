import React, { useEffect, useState } from 'react'
import {useParams , useNavigate} from 'react-router-dom'

export default function Uproduct() {

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [catogory, setcatogory] = useState("");
  const [company, setcompany] = useState("");
  const params = useParams();
  const Naviagte = useNavigate();
  
  useEffect(()=>{
    getProductDetails();
  },[])

  const getProductDetails = async ()=>{
    let result = await fetch(`http://localhost:5000/update-product/${params.id}`);
    result = await result.json();
    setname(result.name);
    setprice(result.price);
    setcatogory(result.catogory);
    setcompany(result.company);

  }

  const Updateproduct = async () =>  {
  
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      method:"PUT",
      body:JSON.stringify({name,price,catogory,company}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result = await result.json();
    console.log(result)
    Naviagte("/");
  }

  return (
    <div className='sign'>
      <h1>Update Product</h1>
      <input type="text" value={name} className='inputBox' onChange={(e) => setname(e.target.value)} placeholder='Enter Product Name' />
      <input type="text" value={price} className='inputBox' onChange={(e) => setprice(e.target.value)} placeholder='Enter Product Price' />
      <input type="text" value={catogory} className='inputBox' onChange={(e) => setcatogory(e.target.value)} placeholder='Enter Product Catogory' />
      <input type="text" value={company} className='inputBox' onChange={(e) => setcompany(e.target.value)} placeholder='Enter Product Company' />
      <button type='button' onClick={Updateproduct} className='btn'>Update Product</button>
    </div>
  )
}

