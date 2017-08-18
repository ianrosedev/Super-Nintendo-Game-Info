import React from 'react';
import GamesList from '../../components/GamesList/GamesList';

const FAKE_DATA = {
  games: [
    'Aladdin',
    'Street Fighter 2',
    'Super Mario World',
    'Metroid',
    'Zelda'
  ]
};

const SearchableGamesList = () => {
  const { games } = FAKE_DATA;

  return (
    <div>
      <GamesList data={games} />
    </div>
  );
};

export default SearchableGamesList;
