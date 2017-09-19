/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <div className='footer'>
    {(history.location.pathname === '/') ? (
      <span>
        <p>Super Nintendo Game Info</p>
        <a href='#full-games-list'>Full List</a>
        <a href='#'>Top</a>
      </span>
    ) : (
      <span>
        <p>Super Nintendo Game Info</p>
        <Link to='/'>Home</Link>
        <a href='#'>Top</a>
      </span>
    )}
  </div>
);

export default Footer;
