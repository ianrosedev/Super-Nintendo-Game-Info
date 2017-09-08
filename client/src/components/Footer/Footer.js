/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <div className='footer'>
    {(window.location.pathname === '/') ? (
      <span>
        Super Nintendo Game Info
        <a href='#full-games-list'>Full List</a>
        <a href='#'>Top</a>
      </span>
    ) : (
      <span>
        Super Nintendo Game Info
        <Link to='/'>Home</Link>
        <a href='#'>Top</a>
      </span>
    )}
  </div>
);

export default Footer;
