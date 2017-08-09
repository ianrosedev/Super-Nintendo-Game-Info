import React from 'react';
import GameDetail from '../../containers/GameDetail/GameDetail';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import './LandingPage.css';

const LandingPage = () => (
  <div className='landing-page'>
    <HeaderContainer
      title='Featured Game'
      icon='fa fa-star'
    >
      <GameDetail />
    </HeaderContainer>
    <HeaderContainer
      title='Full Game Listing'
      icon='fa fa-gamepad'
    >
      <p>testing</p>
      <p>123</p>
    </HeaderContainer>
  </div>
);

export default LandingPage;
