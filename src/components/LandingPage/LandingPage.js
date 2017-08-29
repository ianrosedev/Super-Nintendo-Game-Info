import React from 'react';
import GameDetail from '../../containers/GameDetail/GameDetail';
import GamesList from '../../containers/GamesList/GamesList';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import './LandingPage.css';

const LandingPage = () => (
  <div className='landing-page'>
    <HeaderContainer
      title='Featured Game'
      icon='fa fa-star'
    >
      <GameDetail isLandingPage={true} />
    </HeaderContainer>
    <HeaderContainer
      title='Full Game Listing'
      icon='fa fa-gamepad'
    >
      <GamesList />
    </HeaderContainer>
  </div>
);

export default LandingPage;
