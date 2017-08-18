import React from 'react';
import './Game.css';

const Game = ({ children }) => (
  <li className='game'>
    <a href='#change/me/later'>
      {children}
    </a>
  </li>
);

export default Game;
