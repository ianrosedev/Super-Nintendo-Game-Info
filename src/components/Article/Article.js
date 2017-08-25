import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';

const propTypes = {
  fetchGame: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

class Article extends Component {
  componentDidMount() {
    this.props.fetchGame('Super_Mario_World');
  }

  render() {
    const { isFetching, title, image, text } = this.props;

    return (
      (isFetching) ? (
        <Spinner />
      ) : (
        <div>
          <Title title={title} />
          <Image image={image} />
          <Text text={text} />
        </div>
      )
    );
  }
}

Article.propTypes = propTypes;

export default Article;
