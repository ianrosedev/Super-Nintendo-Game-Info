import React from 'react';
import MoreButton from '../MoreButton/MoreButton'
import './Text.css';

const Text = ({ data }) => (
  <div>
    <p className='text' dangerouslySetInnerHTML={{ __html: data }}></p>
    <MoreButton
      arrowDirection='down'
      text='Keep Reading'
    />
  </div>
);

export default Text;
