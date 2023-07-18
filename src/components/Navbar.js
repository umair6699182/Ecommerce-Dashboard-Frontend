import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './img/pngegg.png';

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");

  }
 
  return (
    <nav>
      <img src={Logo} alt='logo' className='logo' />
      {auth ? <ul className='flex'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link onClick={()=> alert("You Must Need to Select Product First")}>Update Products</Link></li>
        <li><Link to="/pro">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout </Link></li>
      </ul>

        :
        <ul className='flex' id='right'>
          <>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        </ul>
}
    </nav>
  );
};

export default Navbar;
