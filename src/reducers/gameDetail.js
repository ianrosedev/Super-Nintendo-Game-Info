import { createImageLink } from '../Helpers/Helpers';

// Constants
export const REQUEST_GAME = 'REQUEST_GAME';
export const RECEIVE_GAME = 'RECEIVE_GAME';

// Action Creators
export const requestGame = () => ({
  type: REQUEST_GAME,
  isFetching: true
});

export const receiveGame = (response) => ({
  type: RECEIVE_GAME,
  isFetching: false,
  title: response.title,
  text: response.text,
  image: response.image
});

// Thunk Action Creators
export const fetchGame = (game) => {
  return (dispatch, getState) => {
    const currentGame = game || getState().gamesList.currentGame;

    dispatch(requestGame());

    return fetch('https://en.wikipedia.org/w/api.php?' +
                 '&action=query' +
                 '&titles=' + encodeURIComponent(currentGame) +
                 '&prop=extracts' +
                 '&exintro=' +
                 '&redirects=1' +
                 '&format=json' +
                 '&origin=*')
      .then(response => response.json())
      .then(
        response => dispatch(receiveGame({
          title: response.query.pages[Object.keys(response.query.pages)[0]].title,
          text: response.query.pages[Object.keys(response.query.pages)[0]].extract,
          image: createImageLink(currentGame)
        }))
      );
  };
};

// Initial State
const initialState = {
  isFetching: false,
  title: '',
  text: '',
  image: 'not_found'
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GAME:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RECEIVE_GAME:
      return {
        ...state,
        isFetching: action.isFetching,
        title: action.title,
        text: action.text,
        image: action.image
      };
    default:
      return state;
  }
};
