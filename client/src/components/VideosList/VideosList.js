import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import Video from '../Video/Video';
import './VideosList.css';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  videos: PropTypes.array.isRequired,
  fetchVideos: PropTypes.func.isRequired
};

class VideosList extends Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { isFetching, videos } = this.props;

    const selectedVideos = videos.map((video, i) => (
      <Video
        key={i}
        video={video}
      />
    ));

    return (
      (isFetching) ? (
        <Spinner />
      ) : (
        <div className='videos-list'>
          {selectedVideos}
        </div>
      )
    );
  }
}

VideosList.propTypes = propTypes;

export default VideosList;
