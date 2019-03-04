import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar/SearchBar';
import GamesList from './GamesList';

describe('GamesList', () => {
  let wrapper;
  let props = {
    query: '',
    updateQuery: jest.fn(),
    clearQuery: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<GamesList {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders a `SearchBar`', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });

  describe('the list', () => {
    it('if the query has a match renders an `ul`', () => {
      wrapper.setProps({
        ...props,
        query: 'Super Mario World',
      });

      expect(wrapper.find('ul').length).toBe(1);
    });

    it('if the query has no match it renders a `p`', () => {
      wrapper.setProps({
        ...props,
        query: 'somethingThatWontBeBound',
      });

      expect(wrapper.find('p').length).toBe(1);
    });
  });
});
