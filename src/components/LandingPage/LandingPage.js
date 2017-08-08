import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import GameDetail from '../../containers/GameDetail/GameDetail';
import './LandingPage.css';

const LandingPage = () => (
  <div className='landing-page'>
    <HeaderContainer
      title='Featured Game'
      icon={'fa fa-star'}
    >
      <GameDetail />
    </HeaderContainer>
    <HeaderContainer title='Full Game Listing'>
      <p>testing</p>
      <p>123</p>
    </HeaderContainer>
  </div>
);

export default LandingPage;
