import React from 'react';
import { shallow } from 'enzyme';
import GamesList from './GamesList';
import Game from '../Game/Game';
import CurrentGameLink from '../../containers/CurrentGameLink/CurrentGameLink';

describe('GamesList', () => {
  let wrapper;
  const props = {
    query: '',
    updateQuery: jest.fn(),
    clearQuery: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<GamesList {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('an icon as `i` with class `fa-search`', () => {
      expect(wrapper.find('i').hasClass('fa-search')).toBe(true);
    });

    it('an input with type of `search`', () => {
      expect(wrapper.find('input').prop('type')).toBe('search');
    });

    it('a button that says `Clear`', () => {
      expect(wrapper.find('button').text()).toBe('Clear');
    });
  });
});
