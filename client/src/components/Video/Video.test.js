import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

describe('Video', () => {
  let wrapper;
  const props = {
    selectedGame: 'Super Mario World',
    video: '123456'
  };

  beforeEach(() => {
    wrapper = shallow(<Video {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('an `iframe`', () => {
      expect(wrapper.find('iframe').length).toBe(1);
    });
  });
});
