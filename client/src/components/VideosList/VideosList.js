import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import fullGamesList from '../../static/fullGamesList';
import Spinner from '../Spinner/Spinner';
import Video from '../Video/Video';
import './VideosList.scss';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  // selectedGame: PropTypes.object.isRequired,
  videos: PropTypes.array.isRequired,
  fetchVideos: PropTypes.func.isRequired,
};

class VideosList extends Component {
  componentDidMount() {
    const { history, fetchVideos } = this.props;

    const currentGame = fullGamesList.find(game => {
      return game.url === history.location.pathname.slice(1);
    });

    fetchVideos(currentGame);
  }

  render() {
    const { isFetching, isError, selectedGame, videos } = this.props;

    if (isError) {
      return (
        <div className='videos-list'>
          <h3 className='error'>Sorry, there was an error!</h3>
        </div>
      );
    } else {
      const selectedVideos = videos.map((video, i) => (
        <Video key={i} selectedGame={selectedGame} video={video} />
      ));

      return isFetching ? (
        <Spinner />
      ) : (
        <div className='videos-list'>{selectedVideos}</div>
      );
    }
  }
}

VideosList.propTypes = propTypes;

// Export unwrapped for testing
export { VideosList };
export default withRouter(VideosList);
