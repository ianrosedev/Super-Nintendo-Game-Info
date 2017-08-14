import React from 'react';
import Game from '../Game/Game';
import './GamesList.css';

const GamesList = ({ data }) => {
  const games = data.map((game, i) => (
    <Game
      key={i}
      game={game}
    />
  ));

  return (
    <ul className='games-list'>
      {games}
    </ul>
  );
};

export default GamesList;
