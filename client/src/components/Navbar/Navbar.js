import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isLandingPage, setIsLandingPage] = useState(true);

  useEffect(() =>
    window.location.pathname === '/'
      ? setIsLandingPage(true)
      : setIsLandingPage(false)
  );

  return (
    <div className='navbar'>
      <span className='nav-link'>
        {isLandingPage ? (
          <a href='#full-games-list'>
            <i className='fa fa-gamepad' aria-hidden='true' />
            Full List
          </a>
        ) : (
          <Link to='/'>
            <i className='fa fa-home' aria-hidden='true' />
            Home
          </Link>
        )}
      </span>
    </div>
  );
};

export default Navbar;
