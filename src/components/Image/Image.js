import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const propTypes = {
  image: PropTypes.string.isRequired
};

const Image = ({ image }) => (
  <img
    className='image'
    src={image}
    alt='TEST! Change dynamically later!'
  />
);

Image.propTypes = propTypes;

export default Image;
