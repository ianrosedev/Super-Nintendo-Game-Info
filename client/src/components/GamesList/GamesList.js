import React from 'react';
import PropTypes from 'prop-types';
import fullGamesList from '../../static/fullGamesList';
import SearchBar from '../SearchBar/SearchBar';
import Game from '../Game/Game';
import CurrentGameLink from '../../containers/CurrentGameLink/CurrentGameLink';
import './GamesList.css';

const propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  clearQuery: PropTypes.func.isRequired,
};

const GamesList = props => {
  const { query } = props;

  const filteredGamesList = fullGamesList.filter(game => {
    if (game.wiki.toLowerCase().includes(query.toLowerCase())) {
      return game;
    }

    return '';
  });

  const games = filteredGamesList.map((game, i) => (
    <Game key={i}>
      <CurrentGameLink game={game}>{game.wiki}</CurrentGameLink>
    </Game>
  ));

  return (
    <div className='games-list'>
      <SearchBar {...props} />
      {games.length > 0 ? <ul>{games}</ul> : <p>No Results Found</p>}
    </div>
  );
};

GamesList.propTypes = propTypes;

export default GamesList;
