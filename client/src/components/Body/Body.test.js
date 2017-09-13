import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';

describe('Body', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Body />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
