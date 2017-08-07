import React from 'react';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './App.css';

const App = () => (
  <div className='app'>
    <Header />
    <Navbar />
  </div>
);

export default App;
