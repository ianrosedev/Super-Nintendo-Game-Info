import React from 'react';
import PropTypes from 'prop-types';
import MoreButton from '../MoreButton/MoreButton'
import './Text.css';

const propTypes = {
  text: PropTypes.string.isRequired
};

const Text = ({ text }) => (
  <div>
    <p className='text' dangerouslySetInnerHTML={{ __html: text }}></p>
    <MoreButton
      arrowDirection='down'
      text='Keep Reading'
    />
  </div>
);

Text.propTypes = propTypes;

export default Text;
