import React from 'react';
import PropTypes from 'prop-types';
import { stringToURL } from '../../Helpers/Helpers'
import SearchBar from '../SearchBar/SearchBar';
import Game from '../Game/Game';
import './SearchableGamesList.css';

const propTypes = {
  fullGamesList: PropTypes.array.isRequired,
  setCurrentGame: PropTypes.func.isRequired
};

const GamesList = ({ fullGamesList }) => {
  const games = fullGamesList.map((game, i) => (
    <Game key={i}>
      <a
        href='change/me/later'
        /* onClick={setCurrentGame(this games name)} */
      >
        {game}
      </a>
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

GamesList.propTypes = propTypes;

export default GamesList;
