import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const propTypes = {
  text: PropTypes.string.isRequired
};

const Text = ({ text }) => (
  <div className='text' dangerouslySetInnerHTML={{ __html: text }}></div>
);

Text.propTypes = propTypes;

export default Text;
