import React from 'react';
import GameDetail from '../../containers/GameDetail/GameDetail';
import BasicContainer from '../BasicContainer/BasicContainer';
import './SelectedGame.css';

const SelectedGame = () => (
  <div className='selected-game'>
    <BasicContainer>
      <GameDetail />
    </BasicContainer>
  </div>
);

export default SelectedGame;
