import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import VideosList from './VideosList';
import Video from '../Video/Video';
import Spinner from '../Spinner/Spinner';

describe('VideosList', () => {
  let mountedVideosList;
  const videosList = () => {
    const history = createMemoryHistory('/somegame');

    if (!mountedVideosList) {
      mountedVideosList = shallow(<VideosList history={history} {...props} />);
    }

    return mountedVideosList;
  };
  let props;

  beforeEach(() => {
    props = {
      isFetching: false,
      isError: false,
      selectedGame: 'Super Mario World',
      videos: ['video1', 'video2', 'video3'],
      fetchVideos: jest.fn(),
    };
    mountedVideosList = undefined;
  });

  it('renders without crashing', () => {
    videosList();
  });

  describe('when `isFetching`', () => {
    describe('is false', () => {
      it('always renders 3 videos', () => {
        expect(videosList().find(Video).length).toBe(3);
      });
    });

    describe('is true', () => {
      beforeEach(() => {
        props.isFetching = true;
      });

      it('a `Spinner` is shown', () => {
        expect(videosList().find(Spinner).length).toBe(1);
      });

      it('no videos are rendered', () => {
        expect(videosList().find(Video).length).toBe(0);
      });
    });
  });
});
