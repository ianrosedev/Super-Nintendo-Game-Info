import React from 'react';
import './HeaderContainer.css';

const HeaderContainer = ({ title, children }) => (
  <div className='header-container'>
    <h2>{title}</h2>
    {children}
  </div>
);

export default HeaderContainer;
