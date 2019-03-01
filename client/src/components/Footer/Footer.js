/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <div className='footer'>
    {history.location.pathname === '/' ? (
      <span>
        <a href='#' className='footer-logo'>
          Super Nintendo Game Info
        </a>
        <a href='#full-games-list'>Full List</a>
        <a href='#'>Top</a>
      </span>
    ) : (
      <span>
        <Link to='/' className='footer-logo'>
          Super Nintendo Game Info
        </Link>
        <Link to='/'>Home</Link>
        <a href='#'>Top</a>
      </span>
    )}
  </div>
);

export default Footer;
