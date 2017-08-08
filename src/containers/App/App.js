import React from 'react';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import LandingPage from '../../components/LandingPage/LandingPage';
import './App.css';

const App = () => (
  <div className='app'>
    <Header />
    <Navbar />
    <LandingPage />
  </div>
);

export default App;
