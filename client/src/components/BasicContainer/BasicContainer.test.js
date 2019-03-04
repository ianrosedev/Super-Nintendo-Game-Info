import React from 'react';
import { shallow } from 'enzyme';
import BasicContainer from './BasicContainer';

describe('BasicContainer', () => {
  let wrapper;
  let props = {
    children: '',
  };

  beforeEach(() => {
    wrapper = shallow(<BasicContainer {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
