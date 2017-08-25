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
  text: PropTypes.string.isRequired
};

const testGame = `The Legend of Zelda: A Link to the Past`;
const testGameImage = testGame
                        .toLowerCase()
                        .replace(/ /g, '_')
                        .replace(/:/g, '_-')
                        .replace(/'/g, '');

console.log(testGameImage);

class Article extends Component {
  componentDidMount() {
    this.props.fetchGame(testGame);
  }

  render() {
    const { isFetching, title, text } = this.props;

    return (
      (isFetching) ? (
        <Spinner />
      ) : (
        <div>
          <Title title={title} />
          <Image
            image={require('../../static/coverArtwork/' + testGameImage + '.jpg')} />
          <Text text={text} />
        </div>
      )
    );
  }
}

Article.propTypes = propTypes;

export default Article;
