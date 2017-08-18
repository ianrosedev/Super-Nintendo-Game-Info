import React from 'react';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';

const Article = ({ title, image, text }) => (
  <div>
    <Title data={title} />
    <Image data={image} />
    <Text data={text} />
  </div>
);

export default Article;
