import React from 'react';
import './GameDetailImage.css';

const GameDetailImage = ({ data }) => (
  <img
    className='game-detail-image'
    src={data}
    alt='TEST! Change dynamically later!'
  />
);

export default GameDetailImage;
