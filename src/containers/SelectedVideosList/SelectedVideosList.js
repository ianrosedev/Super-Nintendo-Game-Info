import React from 'react';
import VideosList from '../../components/VideosList/VideosList';

const FAKE_DATA = {
  videos: [
    'AqturoCh5lM',
    'j8YFxB6rYIo',
    'JYRsmhzLx30'
  ]
};

const SelectedVideosList = () => {
  const { videos } = FAKE_DATA;

  return (
    <VideosList data={videos} />
  );
};

export default SelectedVideosList;
