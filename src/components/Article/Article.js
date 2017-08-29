import React, { Component } from 'react';
import { featuredGame } from '../../static/featuredGame';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';

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
    (this.props.isLandingPage) ? (
      this.props.fetchGame(featuredGame)
    ) : (
      this.props.fetchGame()
    )
  }

  render() {
    const { isFetching, title, text, image } = this.props;

    return (
      (isFetching) ? (
        <Spinner />
      ) : (
        <div>
          <Title title={title} />
          <Image image={require(`../../media/images/coverArtwork/${image}.jpg`)} />
          <Text text={text} />
        </div>
      )
    );
  }
}

Article.propTypes = propTypes;

export default Article;
