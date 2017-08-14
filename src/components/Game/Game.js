import React from 'react';
import './Game.css';

const Game = ({ game }) => (
  <li className='game'>
    <a href='#change/me/later'>
      {game}
    </a>
  </li>
);

export default Game;
