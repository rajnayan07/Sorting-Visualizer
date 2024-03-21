import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import image1 from '../asets/img1.jpg'
const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div >
        <img src={image1} alt="image1"/>
      </div>
     <ul className='Navbar-link'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/signup">Sign-Up</Link>
      </li>
      </ul>
  </nav>
  )
}

export default Navbar