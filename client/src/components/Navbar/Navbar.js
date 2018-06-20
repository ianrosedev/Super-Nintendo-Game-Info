import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ history }) => (
  <div className='navbar'>
    <span className='nav-link'>
      {(history.location.pathname === '/') ? (
        <a href='#full-games-list'>
          <i className='fa fa-gamepad' aria-hidden='true'></i>
          Full List
      </a>
      ) : (
          <Link to='/'>
            <i className='fa fa-home' aria-hidden='true'></i>
            Home
      </Link>
        )}
    </span>
  </div>
);

export default withRouter(Navbar);
