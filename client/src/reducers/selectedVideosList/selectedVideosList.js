// Constants
export const SET_SELECTED_GAME = 'SET_SELECTED_GAME';
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const HANDLE_VIDEO_ERROR = 'HANDLE_VIDEO_ERROR';

// Action Creators
export const setSelectedGame = game => ({
  type: SET_SELECTED_GAME,
  selectedGame: game,
});

export const requestVideos = () => ({
  type: REQUEST_VIDEOS,
  isFetching: true,
  isError: false,
});

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  isFetching: false,
  videos: videos,
});

export const handleVideoError = () => ({
  type: HANDLE_VIDEO_ERROR,
  isFetching: false,
  isError: true,
});

// Thunk Action Creators
export const fetchVideos = game => {
  return dispatch => {
    const currentGame = game ? game.wiki : '';

    if (!currentGame) return;

    dispatch(setSelectedGame(currentGame));
    dispatch(requestVideos());

    return fetch(`/videos/${currentGame}`)
      .then(response => {
        if (!response.ok) throw new Error();
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(receiveVideos(response)))
      .catch(error => dispatch(handleVideoError()));
  };
};

// Initial State
export const initialState = {
  isFetching: false,
  isError: false,
  selectedGame: '',
  videos: [],
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_GAME:
      return {
        ...state,
        selectedGame: action.selectedGame,
      };
    case REQUEST_VIDEOS:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
      };
    case RECEIVE_VIDEOS:
      return {
        ...state,
        isFetching: action.isFetching,
        videos: action.videos,
      };
    case HANDLE_VIDEO_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
      };
    default:
      return state;
  }
};
