import React from 'react';
import GameDetail from '../../containers/GameDetail/GameDetail';
import BasicContainer from '../BasicContainer/BasicContainer';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import './SelectedGame.css';

const SelectedGame = () => (
  <div className='selected-game'>
    <BasicContainer>
      <GameDetail />
    </BasicContainer>
    <HeaderContainer
      title='Videos'
      icon='fa fa-video-camera'
    >
      <p>Testing</p>
      <p>123</p>
    </HeaderContainer>
  </div>
);

export default SelectedGame;
