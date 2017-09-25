import reducer, * as duck from './searchableGamesList';

describe('searchableGamesList', () => {
  describe('actions', () => {
    it('updateQuery should create an action and update the query', () => {
      const value = 'Super Mario World';
      const expectedAction = {
        type: duck.UPDATE_QUERY,
        query: 'Super Mario World'
      };

      expect(duck.updateQuery(value)).toEqual(expectedAction);
    });

    it('clearQuery should create an action and reset the query', () => {
      const expectedAction = {
        type: duck.CLEAR_QUERY,
        query: ''
      };

      expect(duck.clearQuery()).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(duck.initialState);
    });

    it('should handle UPDATE_QUERY', () => {
      expect(reducer(undefined, {
        type: duck.UPDATE_QUERY,
        query: 'Super Mario World'
      })).toEqual({
        query: 'Super Mario World'
      });
    });

    it('should handle CLEAR_QUERY', () => {
      expect(reducer(undefined, {
        type: duck.CLEAR_QUERY,
        query: ''
      })).toEqual({
        query: ''
      });
    });
  });
});
