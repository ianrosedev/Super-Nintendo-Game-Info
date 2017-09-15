import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { featuredGame } from '../../static/featuredGame';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import MoreButton from '../MoreButton/MoreButton';
import CurrentGameLink from '../../containers/CurrentGameLink/CurrentGameLink';
import './Article.css';

const propTypes = {
  isLandingPage: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fetchGame: PropTypes.func.isRequired
};

class Article extends Component {
  componentDidMount() {
    const { isLandingPage, fetchGame } = this.props;

    isLandingPage ? fetchGame(featuredGame) : fetchGame()
  }

  render() {
    const { isLandingPage, isFetching, isError, title, text, image } = this.props;

    return (
      <div className='article'>
        {(isFetching) ? (
          <Spinner />
        ) : (
          <div>
            <Title title={title} />
            <Image
              image={require(`../../media/images/coverArtwork/${image}.jpg`)}
              alt={title + ' box artwork'}
            />
            <Text text={text} />
            {isLandingPage && !isError &&
              <MoreButton arrowDirection='right'>
                <CurrentGameLink link={featuredGame}>
                  See More
                </CurrentGameLink>
              </MoreButton>
            }
          </div>
        )}
      </div>
    );
  }
}

Article.propTypes = propTypes;

export default Article;
