import React from 'react';
import MoreButton from '../MoreButton/MoreButton'
import './GameDetailText.css';

const GameDetailText = ({ data }) => (
  <div>
    <p className='game-detail-text' dangerouslySetInnerHTML={{ __html: data }}></p>
    <MoreButton
      arrowDirection='down'
      text='Keep Reading'
    />
  </div>
);

export default GameDetailText;
