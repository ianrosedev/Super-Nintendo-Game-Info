import React from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Game = ({ children }) => <li className='game'>{children}</li>;

Game.propTypes = propTypes;

export default Game;
