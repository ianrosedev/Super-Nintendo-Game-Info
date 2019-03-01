import React from 'react';
import GameDetail from '../../containers/GameDetail/GameDetail';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import SearchableGamesList from '../../containers/SearchableGamesList/SearchableGamesList';
import scrollToTopOnMount from '../../hocs/scrollToTopOnMount';
import './LandingPage.css';

const LandingPage = () => (
  <div className='landing-page'>
    <HeaderContainer title='Featured Game' icon='fa fa-star'>
      <GameDetail isLandingPage={true} />
    </HeaderContainer>
    <span id='full-games-list' aria-hidden='true' />
    <HeaderContainer title='Full Game Listing' icon='fa fa-gamepad'>
      <SearchableGamesList />
    </HeaderContainer>
  </div>
);

export default scrollToTopOnMount(LandingPage);
