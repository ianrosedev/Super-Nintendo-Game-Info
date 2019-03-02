import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ history }) => (
  <div className='navbar'>
    <span className='nav-link'>
      {history.location.pathname === '/' ? (
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

// Export unwrapped for testing
export { Navbar };
export default withRouter(Navbar);
