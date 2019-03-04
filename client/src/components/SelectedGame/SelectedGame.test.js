import React from 'react';
import { shallow } from 'enzyme';
import SelectedGame from './SelectedGame';
import GameDetail from '../../containers/GameDetail/GameDetail';
import SelectedVideosList from '../../containers/SelectedVideosList/SelectedVideosList';
import BasicContainer from '../BasicContainer/BasicContainer';
import HeaderContainer from '../HeaderContainer/HeaderContainer';

describe('SelectedGame', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SelectedGame />)
      .first()
      .shallow();
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('a `BasicContainer`', () => {
      expect(wrapper.find(BasicContainer).length).toBe(1);
    });

    it('a `GameDetail`', () => {
      expect(wrapper.find(GameDetail).length).toBe(1);
    });

    it('a `HeaderContainer`', () => {
      expect(wrapper.find(HeaderContainer).length).toBe(1);
    });

    it('a `SelectedVideosList`', () => {
      expect(wrapper.find(SelectedVideosList).length).toBe(1);
    });
  });
});
