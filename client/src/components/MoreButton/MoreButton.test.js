import React from 'react';
import { shallow } from 'enzyme';
import MoreButton from './MoreButton';

describe('MoreButton', () => {
  let wrapper;
  const props = {
    arrowDirection: 'right',
    children: '',
  };

  beforeEach(() => {
    wrapper = shallow(<MoreButton {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('an icon as `i`', () => {
      expect(wrapper.find('i').length).toBe(1);
    });
  });
});
