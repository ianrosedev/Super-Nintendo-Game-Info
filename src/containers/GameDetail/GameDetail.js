import React from 'react';
import GameDetailHeader from '../../components/GameDetailHeader/GameDetailHeader';
import GameDetailImage from '../../components/GameDetailImage/GameDetailImage';
import GameDetailText from '../../components/GameDetailText/GameDetailText';

const FAKE_DATA = {
  header: 'Super Mario World',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius ante ac felis ornare ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce facilisis dui rhoncus justo laoreet, eget malesuada tellus faucibus. Vestibulum fringilla commodo diam, at gravida ante scelerisque in. Nullam at libero congue, efficitur ipsum nec, venenatis eros. Pellentesque faucibus velit sit amet erat ullamcorper efficitur. Sed scelerisque ex mauris, eget viverra orci bibendum id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas./nSed venenatis, mauris in pretium congue, turpis ligula mollis nibh, ut blandit purus odio vitae massa. Etiam at vehicula arcu, vitae fringilla sem. Cras ac mauris eleifend, maximus diam eget, cursus elit. Pellentesque ut arcu feugiat, elementum ipsum pellentesque, tincidunt metus. Proin rutrum erat porttitor leo commodo mollis. In pellentesque a leo sed faucibus. In aliquet maximus sapien et tristique. Curabitur suscipit efficitur efficitur.',
  image: 'https://gamefaqs.akamaized.net/box/6/3/0/14630_front.jpg'
};

const GameDetail = () => {
  const { header, text, image } = FAKE_DATA;

  return (
    <div>
      <GameDetailHeader data={header} />
      <GameDetailImage data={image} />
      <GameDetailText data={text} />
    </div>
  );
};

export default GameDetail;
