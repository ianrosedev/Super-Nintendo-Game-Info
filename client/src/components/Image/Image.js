import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Image = ({ image, alt }) => (
  <img className='image' src={image} alt={alt} />
);

Image.propTypes = propTypes;

export default Image;
