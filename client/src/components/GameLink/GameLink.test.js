import React from 'react';
import { shallow } from 'enzyme';
import GameLink from './GameLink';
import { Link } from 'react-router-dom';

describe('GameLink', () => {
  let wrapper;
  let props = {
    link: 'Super Mario World',
    setCurrentGame: jest.fn(),
    children: ''
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
