import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { stringToURL } from '../../Helpers/Strings';

const propTypes = {
  link: PropTypes.string.isRequired,
  setCurrentGame: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const GameLink = ({ link, setCurrentGame, children }) => (
  <Link
    to={stringToURL(link)}
    onClick={() => setCurrentGame(link)}
  >
    {children}
  </Link>
);

GameLink.propTypes = propTypes;

export default GameLink;
