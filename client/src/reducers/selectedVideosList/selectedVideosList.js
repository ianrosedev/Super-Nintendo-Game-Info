// Constants
export const SET_SELECTED_GAME = 'SET_SELECTED_GAME';
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

// Action Creators
export const setSelectedGame = (game) => ({
  type: SET_SELECTED_GAME,
  selectedGame: game
});

export const requestVideos = () => ({
  type: REQUEST_VIDEOS,
  isFetching: true
});

export const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  isFetching: false,
  videos: videos
});

// Thunk Action Creators
export const fetchVideos = () => {
  return (dispatch, getState) => {
    const currentGame = getState().currentGame.currentGame;

    if (!currentGame) return;

    dispatch(setSelectedGame(currentGame));
    dispatch(requestVideos());

    return fetch(`/videos/${currentGame}`)
      .then(response => response.json())
      .then(response => dispatch(receiveVideos(response)));
  };
};

// Initial State
const initialState = {
  isFetching: false,
  selectedGame: '',
  videos: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_GAME:
      return {
        ...state,
        selectedGame: action.selectedGame
      };
    case REQUEST_VIDEOS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case RECEIVE_VIDEOS:
      return {
        ...state,
        isFetching: action.isFetching,
        videos: action.videos
      };
    default:
      return state;
  }
};
