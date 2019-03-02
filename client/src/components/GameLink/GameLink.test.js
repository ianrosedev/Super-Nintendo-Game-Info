import React from 'react';
import { shallow } from 'enzyme';
import GameLink from './GameLink';
import { Link } from 'react-router-dom';

describe('GameLink', () => {
  let wrapper;
  let props = {
    game: {
      wiki: 'Battletoads in Battlemaniacs',
      url: 'battletoads-in-battlemaniacs',
      image: 'battletoads_in_battlemaniacs',
    },
    setCurrentGame: jest.fn(),
    children: '',
  };

  beforeEach(() => {
    wrapper = shallow(<GameLink {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('a `Link`', () => {
      expect(wrapper.find(Link).length).toBe(1);
    });
  });
});
