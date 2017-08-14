import React from 'react';
import Video from '../Video/Video';
import './VideosList.css';

const VideosList = ({ data }) => {
  const videos = data.map((videoId, i) => (
    <Video
      key={i}
      videoId={videoId}
    />
  ));

  return (
    <div className='videos-list'>
      {videos}
    </div>
  );
};

export default VideosList;
