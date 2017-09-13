import React from 'react';
import { shallow } from 'enzyme';
import VideosList from './VideosList';
import Video from '../Video/Video';
import Spinner from '../Spinner/Spinner';

describe('VideosList', () => {
  let mountedVideosList;
  const videosList = () => {
    if (!mountedVideosList) {
      mountedVideosList = shallow(
        <VideosList {...props} />
      );
    }
    return mountedVideosList;
  }
  let props;

  beforeEach(() => {
    props = {
      isFetching: false,
      videos: ['video1', 'video2', 'video3'],
      fetchVideos: jest.fn(),
    };
    mountedVideosList = undefined;
  });

  it('renders without crashing', () => {
    videosList();
  });

  describe('when `isFetching` is false', () => {
    it('always renders 3 videos', () => {
      expect(videosList().find(Video).length).toBe(3);
    });
  });

  describe('when `isFetching` is true', () => {
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
