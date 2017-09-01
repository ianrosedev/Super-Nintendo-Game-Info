// Constants
export const UPDATE_QUERY = 'UPDATE_QUERY';

// Action Creators
export const updateQuery = (event) => ({
  type: UPDATE_QUERY,
  query: event.target.value
});

// Initial State
const initialState = {
  query: ''
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
}
