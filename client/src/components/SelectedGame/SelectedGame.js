import React from 'react';
import GameDetail from '../../containers/GameDetail/GameDetail';
import SelectedVideosList from '../../containers/SelectedVideosList/SelectedVideosList';
import BasicContainer from '../BasicContainer/BasicContainer';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import scrollToTopOnMount from '../../hocs/scrollToTopOnMount';
import './SelectedGame.scss';

const SelectedGame = () => (
  <div className='selected-game'>
    <BasicContainer>
      <GameDetail />
    </BasicContainer>
    <HeaderContainer title='Videos' icon='fa fa-video-camera'>
      <SelectedVideosList />
    </HeaderContainer>
  </div>
);

export default scrollToTopOnMount(SelectedGame);
