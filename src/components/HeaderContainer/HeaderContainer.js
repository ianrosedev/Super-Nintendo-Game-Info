import React from 'react';
import './HeaderContainer.css';

const HeaderContainer = ({ title, icon, children }) => (
  <div className='header-container'>
      {
        icon ? (
          <h2>
            <i className={icon} aria-hidden='true'></i>
            {title}
          </h2>
        ) : (
          <h2>
            {title}
          </h2>
        )
      }
    {children}
  </div>
);

export default HeaderContainer;
