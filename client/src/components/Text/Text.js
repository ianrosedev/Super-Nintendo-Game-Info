import React from 'react';
import PropTypes from 'prop-types';
import './Text.scss';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Text = ({ text }) => (
  <div className='text' dangerouslySetInnerHTML={{ __html: text }} />
);

Text.propTypes = propTypes;

export default Text;
