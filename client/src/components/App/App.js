import React from 'react';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import './App.css';

const App = () => (
  <div className='app'>
    <Header />
    <Navbar />
    <Body />
  </div>
);

export default App;
