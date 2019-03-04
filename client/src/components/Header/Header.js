import React from 'react';
import './Header.scss';

const Header = () => (
  <div className='header-background' id='top'>
    <div className='header'>
      <h1>Super Nintendo Game Info</h1>
      <img
        src={require('../../media/images/super-nintendo-logo.png')}
        alt='Super Nintendo circles logo'
      />
    </div>
  </div>
);

export default Header;
