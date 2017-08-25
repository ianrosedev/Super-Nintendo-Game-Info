import React from 'react';
import './Game.css';

const Game = ({ children }) => (
  <li className='game'>
    {children}
  </li>
);

export default Game;
