// import React, { useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import SignUp from './components/SignUp';
import Priv from './components/privateComponent.js';
import Login from './components/Log.js'
import Addproduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Uproduct from './components/Uproduct';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Priv/>} >
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<Addproduct />} />
            <Route path="/update/:id" element={ <Uproduct />} />
            <Route path="/log" element={<h1>Logout</h1>} />
            <Route path="/pro" element={<h1>Profile</h1>} />
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );


}

export default App;
