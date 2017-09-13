import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';

describe('Game', () => {
  let wrapper;
  let props = {
    children: ''
  };

  beforeEach(() => {
    wrapper = shallow(<Game {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
