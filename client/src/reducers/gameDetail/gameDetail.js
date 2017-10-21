import { createImageLink } from '../../helpers/strings';
import history from '../../history';

// Constants
export const REQUEST_GAME = 'REQUEST_GAME';
export const RECEIVE_GAME = 'RECEIVE_GAME';
export const HANDLE_WIKI_ERROR = 'HANDLE_WIKI_ERROR';

// Action Creators
export const requestGame = () => ({
  type: REQUEST_GAME,
  isFetching: true,
  isError: false
});

export const receiveGame = (response) => ({
  type: RECEIVE_GAME,
  isFetching: false,
  title: response.title,
  text: response.text || '<p>Sorry, there is no information about this game.</p>',
  image: response.image
});

export const handleWikiError = () => ({
  type: HANDLE_WIKI_ERROR,
  isFetching: false,
  isError: true,
});

// Thunk Action Creators
export const fetchGame = (game) => {
  return (dispatch, getState) => {
    const currentGame = game || getState().currentGame.currentGame;

    if (!currentGame) return history.push('/');

    dispatch(requestGame());

    return (
      fetch('https://en.wikipedia.org/w/api.php?' +
            '&action=query' +
            '&titles=' + encodeURIComponent(currentGame) +
            '&prop=extracts' +
            '&exintro=' +
            '&redirects=1' +
            '&format=json' +
             '&origin=*')
        .then(response => response.json())
        .then(response => dispatch(receiveGame({
          title: response.query.pages[Object.keys(response.query.pages)[0]].title,
          text: response.query.pages[Object.keys(response.query.pages)[0]].extract,
          image: createImageLink(currentGame)
        })))
        .catch(error => dispatch(handleWikiError(error)))
    );
  };
};

// Initial State
export const initialState = {
  isFetching: false,
  isError: false,
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
        isFetching: action.isFetching,
        isError: action.isError,
      };
    case RECEIVE_GAME:
      return {
        ...state,
        isFetching: action.isFetching,
        title: action.title,
        text: action.text,
        image: action.image
      };
    case HANDLE_WIKI_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };
    default:
      return state;
  }
};
