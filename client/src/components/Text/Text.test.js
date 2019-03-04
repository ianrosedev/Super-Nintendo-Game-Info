import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('Text', () => {
  let wrapper;
  let props = {
    text: 'Lorem ipsum...',
  };

  beforeEach(() => {
    wrapper = shallow(<Text {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
