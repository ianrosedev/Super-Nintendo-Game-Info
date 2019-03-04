import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import fullGamesList from '../../static/fullGamesList';
import { featuredGame } from '../../static/featuredGame';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import MoreButton from '../MoreButton/MoreButton';
import CurrentGameLink from '../../containers/CurrentGameLink/CurrentGameLink';
import './Article.scss';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fetchGame: PropTypes.func.isRequired,
};

class Article extends Component {
  componentDidMount() {
    const { history, isLandingPage, fetchGame } = this.props;
    const currentGame = fullGamesList.find(game => {
      return game.url === history.location.pathname.slice(1);
    });

    if (!currentGame && !isLandingPage) {
      // If game dosen't exist go back to homepage
      return history.push('/');
    }

    fetchGame(currentGame || featuredGame);
  }

  render() {
    const {
      isLandingPage,
      isFetching,
      isError,
      title,
      text,
      image,
    } = this.props;

    if (isError) {
      return (
        <div className='article'>
          <h3 className='error'>Sorry, there was an error!</h3>
        </div>
      );
    } else {
      return (
        <div className='article'>
          {isFetching ? (
            <Spinner />
          ) : (
            <div>
              <Title title={title} />
              <Image
                image={require(`../../media/images/coverArtwork/${image}.jpg`)}
                alt={title + ' box artwork'}
              />
              <Text text={text} />
              {isLandingPage && (
                <MoreButton arrowDirection='right'>
                  <CurrentGameLink game={featuredGame}>
                    See More
                  </CurrentGameLink>
                </MoreButton>
              )}
            </div>
          )}
        </div>
      );
    }
  }
}

Article.propTypes = propTypes;

// Export unwrapped for testing
export { Article };
export default withRouter(Article);
