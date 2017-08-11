import React from 'react';
import './MoreButton.css';

const MoreButton = ({ arrowDirection, text }) => (
  <div className='more-button'>
    <button type='button'>
      <i className={`fa fa-arrow-${arrowDirection}`}></i>
      {text}
    </button>
  </div>
);

export default MoreButton;
