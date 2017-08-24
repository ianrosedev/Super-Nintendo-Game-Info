import React from 'react';
import MoreButton from '../MoreButton/MoreButton'
import './Text.css';

const Text = ({ text }) => (
  <div>
    <p className='text' dangerouslySetInnerHTML={{ __html: text }}></p>
    <MoreButton
      arrowDirection='down'
      text='Keep Reading'
    />
  </div>
);

export default Text;
