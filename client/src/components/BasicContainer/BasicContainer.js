import React from 'react';
import PropTypes from 'prop-types';
import './BasicContainer.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const BasicContainer = ({ children }) => (
  <div className='basic-container'>{children}</div>
);

BasicContainer.propTypes = propTypes;

export default BasicContainer;
