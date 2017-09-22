import React from 'react';
import PropTypes from 'prop-types';
import fullGamesList from '../../static/fullGamesList';
import Game from '../Game/Game';
import CurrentGameLink from '../../containers/CurrentGameLink/CurrentGameLink';
import './GamesList.css';

const propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  clearQuery: PropTypes.func.isRequired
};

const GamesList = ({ query, updateQuery, clearQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    updateQuery(event.target.value)
  };

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
      <form
        className='search-bar'
        onSubmit={handleSubmit}
      >
        <i className='fa fa-search' aria-hidden='true'></i>
        <input
          type='search'
          placeholder='Search Games...'
          value={query}
          onChange={handleChange}
        />
        <button
          type='button'
          onMouseDown={clearQuery}
        >
          Clear
        </button>
      </form>
      <ul>
        {games}
      </ul>
    </div>
  );
};

GamesList.propTypes = propTypes;

export default GamesList;
