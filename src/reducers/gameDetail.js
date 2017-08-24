// FAKE DATA FOR TESTING!!!
// Remove when proper API wired up.
const FAKE_DATA = {
  title: 'Super Mario World',
  text: `Super Mario World, originally known in Japan as Super Mario Bros. 4, is a 1990 platform video game developed and published by Nintendo for the Super Nintendo Entertainment System (Super NES). Development was handled by Nintendo's Entertainment Analysis and Development division, led by producer Shigeru Miyamoto, and was released as a pack-in launch title for the console. It also features 2D graphics with linear transformations.<br /><br />
         Super Mario World centers on the quest of Mario and Luigi to save Dinosaur Land from Bowser, the series' antagonist. The two brothers must travel across seven worlds to restore order to Dinosaur Land. It built on the gameplay of previous Mario games, introducing new power-ups that augment character abilities, and established conventions that were carried over to future games in the series. The game also marked the first appearance of Yoshi, Mario's dinosaur sidekick.<br/><br/>
         Super Mario World was a critical and commercial success, selling over 20 million copies worldwide, and is considered by many critics to be one of the best games ever made. It has been re-released multiple times, first as part of the compilation release Super Mario All-Stars on the Super NES in 1994, and on the Game Boy Advance as Super Mario Advance 2 in 2001 and outside Japan as Super Mario World: Super Mario Advance 2 in 2002 with modified gameplay. It was later re-released as a Virtual Console title for the Wii, Wii U and New Nintendo 3DS consoles.`,
  image: 'https://gamefaqs.akamaized.net/box/6/3/0/14630_front.jpg'
};

// Constants
export const REQUEST_GAME = 'REQUEST_GAME';
export const RECEIVE_GAME = 'RECEIVE_GAME';

// Initial State
const initialState = {
  isFetching: false,
  id: null,
  title: '',
  text: '',
  image: ''
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GAME:
      return {
        ...state,
        isFetching: true,
        id: action.id
      }
    case RECEIVE_GAME:
      return {
        ...state,
        isFetching: false,
        id: action.id,
        title: action.data.title,
        image: action.data.image,
        text: action.data.text
      }
    default:
      return state;
  }
};

// Action Creators
export const requestGame = (id) => ({
  type: REQUEST_GAME,
  id
});

export const receiveGame = (id, data) => ({
  type: RECEIVE_GAME,
  id,
  data
});

// Thunk Action Creators
export function fetchGame(id) {
  return function(dispatch) {
    dispatch(requestGame(id));

    // Simulated API call
    setTimeout(() => dispatch(receiveGame(id, FAKE_DATA)), 3000);
  };
};
