import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
  let wrapper;
  let props = {
    title: 'Super Mario World',
    icon: 'star',
    children: ''
  };

  beforeEach(() => {
    wrapper = shallow(<HeaderContainer {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('a `h2`', () => {
      expect(wrapper.find('h2').length).toBe(1);
    });

    it('an icon using `i`', () => {
      expect(wrapper.find('i').length).toBe(1);
    });

    it('a div `header-container-body`', () => {
      expect(wrapper.find('.header-container-body').length).toBe(1);
    });
  });
});
