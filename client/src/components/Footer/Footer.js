/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.scss';

const Footer = () => (
  <div className='footer'>
    {history.location.pathname === '/' ? (
      <span>
        <Link to='/' className='footer-logo'>
          Super Nintendo Game Info
        </Link>
        <HashLink to='/#full-games-list'>Full List</HashLink>
        <HashLink to='/#'>Top</HashLink>
      </span>
    ) : (
      <span>
        <Link to='/' className='footer-logo'>
          Super Nintendo Game Info
        </Link>
        <Link to='/'>Home</Link>
        <HashLink to='#'>Top</HashLink>
      </span>
    )}
  </div>
);

export default Footer;
