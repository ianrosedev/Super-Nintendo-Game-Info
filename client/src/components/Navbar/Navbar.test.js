import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { createMemoryHistory } from 'history';

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    const history = createMemoryHistory('/somegame');

    wrapper = shallow(<Navbar history={history} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('a span', () => {
      expect(wrapper.find('span').length).toBe(1);
    });
  });
});
