// Constants
export const SET_CURRENT_GAME = 'SET_CURRENT_GAME';

// Action Creators
export const setCurrentGame = game => ({
  type: SET_CURRENT_GAME,
  game,
});

// Initial state
export const initialState = {};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_GAME:
      return {
        ...state,
        currentGame: action.game,
      };
    default:
      return state;
  }
};
