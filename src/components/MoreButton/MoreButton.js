import React from 'react';
import './MoreButton.css';

const MoreButton = ({ arrowDirection, children }) => (
  <div className='more-button'>
    <i className={`fa fa-arrow-${arrowDirection}`}></i>
    {children}
  </div>
);

export default MoreButton;
