import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('a `Header`', () => {
      expect(wrapper.find(Header).length).toBe(1);
    });

    it('a `Navbar`', () => {
      expect(wrapper.find(Navbar).length).toBe(1);
    });

    it('a `Body`', () => {
      expect(wrapper.find(Body).length).toBe(1);
    });

    it('a `Footer`', () => {
      expect(wrapper.find(Footer).length).toBe(1);
    });
  });
});
