import React from 'react';
import GamesList from '../../components/GamesList/GamesList';
import fullGamesList from '../../static/fullGamesList';

const SearchableGamesList = () => (
  <div>
    <GamesList list={fullGamesList} />
  </div>
);

export default SearchableGamesList;
