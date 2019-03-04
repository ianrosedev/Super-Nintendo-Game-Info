import React from 'react';
import PropTypes from 'prop-types';
import './Video.scss';

const propTypes = {
  selectedGame: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

const Video = ({ selectedGame, video }) => (
  <div className='video'>
    <iframe
      src={`https://www.youtube.com/embed/${video}`}
      title={'YouTube video of ' + selectedGame}
      width='100%'
      height='100%'
      frameBorder='0'
    />
  </div>
);

Video.propTypes = propTypes;

export default Video;
