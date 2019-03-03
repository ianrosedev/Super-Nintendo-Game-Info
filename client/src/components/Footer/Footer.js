import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const [isLandingPage, setIsLandingPage] = useState(true);

  useEffect(() =>
    window.location.pathname === '/'
      ? setIsLandingPage(true)
      : setIsLandingPage(false)
  );

  return (
    <div className='footer'>
      {isLandingPage ? (
        <span>
          <a href='#top' className='footer-logo'>
            Super Nintendo Game Info
          </a>
          <a href='#full-games-list'>Full List</a>
          <a href='#top'>Top</a>
        </span>
      ) : (
        <span>
          <Link to='/' className='footer-logo'>
            Super Nintendo Game Info
          </Link>
          <Link to='/'>Home</Link>
          <a href='#top'>Top</a>
        </span>
      )}
    </div>
  );
};

export default Footer;
