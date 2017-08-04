import React from 'react';
import './Header.css';

const Header = () => (
  <div className='header-container'>
    <div className='header'>
      <h1>Super Nintendo Game Info</h1>
      <img src={require('../../images/super-nintendo-logo.png')} alt='Super Nintendo circles logo' />
    </div>
  </div>
);

export default Header;
