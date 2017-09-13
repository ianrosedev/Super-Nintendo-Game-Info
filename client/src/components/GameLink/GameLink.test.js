import React from 'react';
import { shallow } from 'enzyme';
import GameLink from './GameLink';

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
});
