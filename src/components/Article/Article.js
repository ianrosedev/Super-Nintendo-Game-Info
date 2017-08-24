import React, { Component } from 'react';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';

class Article extends Component {
  componentDidMount() {
    this.props.fetchGame(111);
  }

  render() {
    const { isFetching, title, image, text } = this.props;

    return (
      (isFetching) ? (
        <p>LOADING...</p>
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

export default Article;
