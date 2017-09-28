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
  clearQuery: PropTypes.func.isRequired
};

const GamesList = (props) => {
  const { query } = props;

  const filteredGamesList = fullGamesList.filter(
    game => game.toLowerCase().includes(query.toLowerCase())
  );

  const games = filteredGamesList.map((game, i) => (
    <Game key={i}>
      <CurrentGameLink link={game}>
        {game}
      </CurrentGameLink>
    </Game>
  ));

  return (
    <div className='games-list'>
      <SearchBar {...props} />
      {(games.length > 0) ? (
        <ul>
          {games}
        </ul>
      ) : (
        <p>No Results Found</p>
      )}
    </div>
  );
};

GamesList.propTypes = propTypes;

export default GamesList;
