import React from 'react';
import { Link } from 'react-router-dom';
import { stringToURL } from '../../Helpers/Strings';

const GameLink = ({ setCurrentGame, link, children }) => (
  <Link
    to={stringToURL(link)}
    onClick={() => setCurrentGame(link)}
  >
    {children}
  </Link>
);

export default GameLink;
