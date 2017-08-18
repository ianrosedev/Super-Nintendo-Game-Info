import React from 'react';
import Article from '../../components/Article/Article';

const FAKE_DATA = {
  title: 'Super Mario World',
  text: `Super Mario World, originally known in Japan as Super Mario Bros. 4, is a 1990 platform video game developed and published by Nintendo for the Super Nintendo Entertainment System (Super NES). Development was handled by Nintendo's Entertainment Analysis and Development division, led by producer Shigeru Miyamoto, and was released as a pack-in launch title for the console. It also features 2D graphics with linear transformations.<br /><br />
         Super Mario World centers on the quest of Mario and Luigi to save Dinosaur Land from Bowser, the series' antagonist. The two brothers must travel across seven worlds to restore order to Dinosaur Land. It built on the gameplay of previous Mario games, introducing new power-ups that augment character abilities, and established conventions that were carried over to future games in the series. The game also marked the first appearance of Yoshi, Mario's dinosaur sidekick.<br/><br/>
         Super Mario World was a critical and commercial success, selling over 20 million copies worldwide, and is considered by many critics to be one of the best games ever made. It has been re-released multiple times, first as part of the compilation release Super Mario All-Stars on the Super NES in 1994, and on the Game Boy Advance as Super Mario Advance 2 in 2001 and outside Japan as Super Mario World: Super Mario Advance 2 in 2002 with modified gameplay. It was later re-released as a Virtual Console title for the Wii, Wii U and New Nintendo 3DS consoles.`,
  image: 'https://gamefaqs.akamaized.net/box/6/3/0/14630_front.jpg'
};

const GameDetail = () => (
  <Article {...FAKE_DATA} />
);
export default GameDetail;
