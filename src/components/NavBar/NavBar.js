import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className='navbar'>
    <span className='nav-link'>
      <Link to='/'>
        <i className='fa fa-home' aria-hidden='true'></i>
        Home
      </Link>
    </span>
  </div>
);

export default Navbar;
