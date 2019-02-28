import React from 'react';
import { Link } from 'react-router-dom';
import BasicContainer from '../BasicContainer/BasicContainer';
import MoreButton from '../MoreButton/MoreButton';
import './NotFound.css';

const NotFound = () => (
  <BasicContainer>
    <div className='not-found'>
      <h1>Sorry, the page you are looking for was not found!</h1>
      <MoreButton arrowDirection='right'>
        <Link to='/'>Home</Link>
      </MoreButton>
    </div>
  </BasicContainer>
);

export default NotFound;
