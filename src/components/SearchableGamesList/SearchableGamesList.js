import React from 'react';
import fullGamesList from '../../static/fullGamesList';
import SearchBar from '../SearchBar/SearchBar';
import Game from '../Game/Game';
import CurrentGameLink from '../../containers/CurrentGameLink/CurrentGameLink';
import './SearchableGamesList.css';

const GamesList = () => {
  const games = fullGamesList.map((game, i) => (
    <Game key={i}>
      <CurrentGameLink link={game}>
        {game}
      </CurrentGameLink>
    </Game>
  ));

  return (
    <div className='searchable-games-list'>
      <SearchBar />
      <ul>
        {games}
      </ul>
    </div>
  );
};

export default GamesList;
