import React from 'react';
import './Image.css';

const Image = ({ image }) => (
  <img
    className='image'
    src={image}
    alt='TEST! Change dynamically later!'
  />
);

export default Image;
