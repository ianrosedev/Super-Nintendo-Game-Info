import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';
import GameDetail from '../../containers/GameDetail/GameDetail';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import SearchableGamesList from '../../containers/SearchableGamesList/SearchableGamesList';

describe('LandingPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />).first().shallow();
  });

  it('renders without crashing', () => {
    wrapper;
  });

  describe('it always renders', () => {
    it('a `HeaderContainer` with title `Featured Game`', () => {
      expect(wrapper.find(HeaderContainer).first().prop('title'))
        .toBe('Featured Game');
    });

    it('a `HeaderContainer` with title `Full Game Listing`', () => {
      expect(wrapper.find(HeaderContainer).at(1).prop('title'))
        .toBe('Full Game Listing');
    });

    it('a `GameDetail`', () => {
      expect(wrapper.find(GameDetail).length).toBe(1);
    });

    it('a `SearchableGamesList`', () => {
      expect(wrapper.find(SearchableGamesList).length).toBe(1);
    });
  });
});
