import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import Video from '../Video/Video';
import './VideosList.css';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.number,
  videos: PropTypes.array.isRequired
};

class VideosList extends Component {
  componentDidMount() {
    this.props.fetchVideos(222);
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
