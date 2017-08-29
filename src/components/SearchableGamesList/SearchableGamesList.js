import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { stringToURL } from '../../Helpers/Strings'
import SearchBar from '../SearchBar/SearchBar';
import Game from '../Game/Game';
import './SearchableGamesList.css';

const propTypes = {
  fullGamesList: PropTypes.array.isRequired,
  setCurrentGame: PropTypes.func.isRequired
};

const GamesList = ({ fullGamesList, setCurrentGame }) => {
  const games = fullGamesList.map((game, i) => (
    <Game key={i}>
      <Link
        to={stringToURL(game)}
        onClick={() => setCurrentGame(game)}
      >
        {game}
      </Link>
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
