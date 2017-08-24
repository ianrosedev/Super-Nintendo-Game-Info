/* eslint-disable */
/* Important to come back to!!! */

import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';

const propTypes = {
  video: PropTypes.string.isRequired
};

const Video = ({ video }) => (
  <div className='video'>
    <iframe
      src={`https://www.youtube.com/embed/${video}`}
      width='100%'
      height='100%'
      frameBorder='0'
    >
    </iframe>
  </div>
);

Video.propTypes = propTypes;

export default Video;
