import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Game from '../Game/Game';
import './GamesList.css';

const GamesList = ({ data }) => {
  const games = data.map((game, i) => (
    <Game key={i}>
      {game}
    </Game>
  ));

  return (
    <div className='games-list'>
      <SearchBar />
      <ul>
        {games}
      </ul>
    </div>
  );
};

export default GamesList;
