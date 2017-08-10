import React from 'react';
import './GamesList.css';

const GamesList = ({ data }) => {
  const games = data.map((game, i) => (
    <li key={i}>
      <a href='#change/me/later'>
        {game}
      </a>
    </li>
  ));

  return (
    <ul className='games-list'>
      {games}
    </ul>
  );
};

export default GamesList;
