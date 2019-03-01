import React from 'react';
import PropTypes from 'prop-types';
import './MoreButton.css';

const propTypes = {
  arrowDirection: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const MoreButton = ({ arrowDirection, children }) => (
  <div className='more-button'>
    <i className={`fa fa-arrow-${arrowDirection}`} />
    {children}
  </div>
);

MoreButton.propTypes = propTypes;

export default MoreButton;
