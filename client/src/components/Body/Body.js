import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SelectedGame from '../SelectedGame/SelectedGame';
import NotFound from '../NotFound/NotFound';
import './Body.css';

const Body = () => (
  <div className='body'>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/:game' component={SelectedGame} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Body;
