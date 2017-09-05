// FAKE DATA FOR TESTING!!!
// Remove when proper API wired up.
const FAKE_DATA = {
  videos: [
    'AqturoCh5lM',
    'j8YFxB6rYIo',
    'JYRsmhzLx30'
  ]
};

// Constants
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

// Initial State
const initialState = {
  isFetching: false,
  videos: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return {
        ...state,
        isFetching: true,
        id: action.id
      }
    case RECEIVE_VIDEOS:
      return {
        ...state,
        isFetching: false,
        id: action.id,
        videos: action.videos
      }
    default:
      return state;
  }
};

// Action Creators
export const requestVideos = (id) => ({
  type: REQUEST_VIDEOS,
  id
});

export const receiveVideos = (id, data) => ({
  type: RECEIVE_VIDEOS,
  id,
  videos: data.videos
});

// Thunk Action Creators
export const fetchVideos = (id) => {
  return (dispatch) => {
    dispatch(requestVideos(id));

    // Simulated API call
    setTimeout(() => dispatch(receiveVideos(id, FAKE_DATA)), 1000);
  };
};
