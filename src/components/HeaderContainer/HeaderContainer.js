import React from 'react';
import PropTypes from 'prop-types';
import './HeaderContainer.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const HeaderContainer = ({ title, icon, children }) => (
  <div className='header-container'>
    {(icon) ? (
      <h2>
        <i className={icon} aria-hidden='true'></i>
        {title}
      </h2>
    ) : (
      <h2>
        {title}
      </h2>
    )}
    <div className='header-container-body'>
      {children}
    </div>
  </div>
);

HeaderContainer.propTypes = propTypes;

export default HeaderContainer;
