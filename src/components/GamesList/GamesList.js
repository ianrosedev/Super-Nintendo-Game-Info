import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import Game from '../Game/Game';
import './GamesList.css';

const propTypes = {
  list: PropTypes.array.isRequired
};

const GamesList = ({ list }) => {
  const games = list.map((game, i) => (
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

GamesList.propTypes = propTypes;

export default GamesList;
