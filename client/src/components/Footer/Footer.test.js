import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import Footer from './Footer';
import { Link } from 'react-router-dom';

describe('Footer', () => {
  let history;
  let mountedFooter;
  const footer = () => {
    if (!mountedFooter) {
      mountedFooter = mount(
        <Footer history={history} />
      );
    }
    return mountedFooter;
  }

  beforeEach(() => {
    mountedFooter = undefined;
    history = undefined;
  });

  it('renders without crashing', () => {
    footer();
  });

  describe('when location is `/`', () => {
    beforeEach(() => {
      history = createMemoryHistory('/');
    });

    it('links to `#full-games-list`', () => {
      expect(footer().find('a[href="#full-games-list"]').length).toBe(1);
    });

    it('links to Top', () => {
      expect(footer().find('a[href="#"]').length).toBe(1);
    });
  });

  describe('when location is `/:game`', () => {
    beforeEach(() => {
      history = createMemoryHistory('/game');
    });

    console.log(history);

    it('links to Home', () => {
      expect(footer().find('a[href="/"]').length).toBe(1);
    });

    it('links to Top', () => {
      expect(footer().find('a[href="#"]').length).toBe(1);
    });
  });
});
