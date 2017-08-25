// Constants
export const REQUEST_GAME = 'REQUEST_GAME';
export const RECEIVE_GAME = 'RECEIVE_GAME';

// Initial State
const initialState = {
  isFetching: false,
  id: '',
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
        title: action.title,
        image: action.image,
        text: action.text
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
  title: data.title,
  image: data.image,
  text: data.text
});

// Thunk Action Creators
export const fetchGame = (id) => {
  return (dispatch) => {
    dispatch(requestGame(id));

    return fetch('https://en.wikipedia.org/w/api.php?' +
                 '&action=query' +
                 '&titles=' + id +
                 '&prop=extracts' +
                 '&exintro=' +
                 '&redirects=1' +
                 '&format=json' +
                 '&origin=*')
      .then(response => response.json())
      .then(
        data => dispatch(receiveGame(id, {
          title: data.query.pages[Object.keys(data.query.pages)[0]].title,
          text: data.query.pages[Object.keys(data.query.pages)[0]].extract
        }))
      );
  };
};
