import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
  let wrapper;
  const props = {
    title: 'Super Mario World',
  };

  beforeEach(() => {
    wrapper = shallow(<Title {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('a `h3` with the class `title`', () => {
      expect(wrapper.find('h3').hasClass('title')).toBe(true);
    });
  });
});
