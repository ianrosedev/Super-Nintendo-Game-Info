import React from 'react';
import './Image.css';

const Image = ({ data }) => (
  <img
    className='image'
    src={data}
    alt='TEST! Change dynamically later!'
  />
);

export default Image;
