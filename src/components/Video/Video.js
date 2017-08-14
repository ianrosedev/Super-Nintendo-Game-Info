import React from 'react';
import './Video.css';

const Video = ({ videoId }) => (
  <div className='video'>
    <iframe
      width='100%'
      height='100%'
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder='0'
    >
    </iframe>
  </div>
);

export default Video;
