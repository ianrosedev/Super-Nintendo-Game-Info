import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image', () => {
  let wrapper;
  const props = {
    image: require('../../media/images/coverArtwork/super_mario_world.jpg'),
    alt: 'Super Mario World Image'
  };

  beforeEach(() => {
    wrapper = shallow(<Image {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('an `img`', () => {
      expect(wrapper.find('img').length).toBe(1);
    });
  });
});
