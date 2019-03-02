import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always contains', () => {
    it('a `h1`', () => {
      expect(wrapper.find('h1').length).toBe(1);
    });

    it('a link to Home', () => {
      expect(wrapper.find(Link).prop('to')).toBe('/');
    });
  });
});
