import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('an icon as `i` with the class `fa-spinner`', () => {
      expect(wrapper.find('i').hasClass('fa-spinner')).toBe(true);
    });

    it('a span with the class `sr-only`', () => {
      expect(wrapper.find('span').hasClass('sr-only')).toBe(true);
    });
  });
});
