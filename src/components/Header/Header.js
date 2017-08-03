import React from 'react';
import './Header.css';

const Header = () => (
  <div className='header'>
    <div className='header-container'>
      <h1>Super Nintendo Game Info</h1>
      <img src={require('./mushroom.png')} alt='Super Mario mushroom' />
    </div>
  </div>
);

export default Header;
