// Constants
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';

// Action Creators
export const updateQuery = value => ({
  type: UPDATE_QUERY,
  query: value,
});

export const clearQuery = () => ({
  type: CLEAR_QUERY,
  query: '',
});

// Initial State
export const initialState = {
  query: '',
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case CLEAR_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};
