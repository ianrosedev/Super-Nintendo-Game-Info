import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  game: PropTypes.object.isRequired,
  setCurrentGame: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const GameLink = ({ game, setCurrentGame, children }) => (
  <Link
    to={'/' + game.url}
    onClick={() => setCurrentGame(game.wiki)}
  >
    {children}
  </Link>
);

GameLink.propTypes = propTypes;

export default GameLink;
