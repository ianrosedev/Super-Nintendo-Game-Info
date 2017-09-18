import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';
import { featuredGame } from '../../static/featuredGame';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import MoreButton from '../MoreButton/MoreButton';
import CurrentGameLink from '../../containers/CurrentGameLink/CurrentGameLink';

describe('Article', () => {
  let mountedArticle;
  const article = () => {
    if (!mountedArticle) {
      mountedArticle = shallow(
        <Article {...props} />
      );
    }
    return mountedArticle;
  }
  let props;

  beforeEach(() => {
    props = {
      isLandingPage: undefined,
      isFetching: false,
      isError: false,
      title: 'Super Mario World',
      text: 'Super Mario World...',
      image: 'super_mario_world',
      fetchGame: jest.fn()
    };
    mountedArticle = undefined;
  });

  it('renders without crashing', () => {
    article();
  });

  describe('when `isLandingPage`', () => {
    describe('is false', () => {
      it('does not render `MoreButton`', () => {
        expect(article().find(MoreButton).length).toBe(0);
      });
    });

    describe('is true', () => {
      beforeEach(() => {
        props.isLandingPage = true;
      });

      it('always renders `MoreButton`', () => {
        expect(article().find(MoreButton).length).toBe(1);
      });
    });
  });

  describe('when `isFetching`', () => {
    describe('is false', () => {
      it('always renders `Title`', () => {
        expect(article().find(Title).length).toBe(1);
      });

      it('always renders `Text`', () => {
        expect(article().find(Text).length).toBe(1);
      });

      it('always renders `Image`', () => {
        expect(article().find(Image).length).toBe(1);
      });
    });

    describe('is true', () => {
      beforeEach(() => {
        props.isFetching = true;
      });

      it('a `Spinner` is shown', () => {
        expect(article().find(Spinner).length).toBe(1);
      });

      it('nothing else is rendered', () => {
        expect(article().find(Title).length).toBe(0);
        expect(article().find(Text).length).toBe(0);
        expect(article().find(Image).length).toBe(0);
      });
    });
  });
});
