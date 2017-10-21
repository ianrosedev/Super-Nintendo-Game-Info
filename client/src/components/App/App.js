import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => (
  <div className='app'>
    <Header />
    <Navbar />
    <Body />
    <Footer />
  </div>
);

export default App;
