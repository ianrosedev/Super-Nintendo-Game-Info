import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className='navbar'>
    <span className='nav-link'>
      {(window.location.pathname === '/') ? (
        <Link
          to='#full-games-list'
          onClick={
            () => {
              document.getElementById('full-games-list')
                .scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
            }
          }
        >
          <i className='fa fa-gamepad' aria-hidden='true'></i>
          Full List
        </Link>
      ) : (
        <Link to='/'>
          <i className='fa fa-home' aria-hidden='true'></i>
          Home
        </Link>
      )}
    </span>
  </div>
);

export default Navbar;
