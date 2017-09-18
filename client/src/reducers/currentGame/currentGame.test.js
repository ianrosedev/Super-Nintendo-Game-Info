import reducer, * as duck from './currentGame';

describe('currentGame', () => {
  describe('actions', () => {
    it('setCurrentGame should create an action and set the current game', () => {
      const game = 'Super Mario World';
      const expectedAction = {
        type: duck.SET_CURRENT_GAME,
        game
      };

      expect(duck.setCurrentGame(game)).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(duck.initialState);
    });

    it('should handle SET_CURRENT_GAME', () => {
      expect(reducer(undefined, {
        type: duck.SET_CURRENT_GAME,
        game: 'Super Mario World'
      })).toEqual({
        currentGame: 'Super Mario World'
      });
    });
  });
});
