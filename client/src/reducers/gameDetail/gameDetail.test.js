import reducer, * as duck from './gameDetail';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { createImageLink } from '../../helpers/strings';

describe('gameDetail', () => {
  describe('actions', () => {
    it('requestGame should create an action and set isFetching to true', () => {
      const expectedAction = {
        type: duck.REQUEST_GAME,
        isFetching: true,
        isError: false
      };

      expect(duck.requestGame()).toEqual(expectedAction);
    });

    it('receiveGame should create an action and set the data', () => {
      const response = {
        title: 'Super Mario World',
        text: 'Lorem...',
        image: 'super_mario_world'
      };
      const expectedAction = {
        type: duck.RECEIVE_GAME,
        isFetching: false,
        ...response
      };

      expect(duck.receiveGame(response)).toEqual(expectedAction);
    });

    it('handleWikiError should create an action and set isError to true', () => {
      const expectedAction = {
        type: duck.HANDLE_WIKI_ERROR,
        isFetching: false,
        isError: true,
      };

      expect(duck.handleWikiError()).toEqual(expectedAction);
    });
  });

  describe('thunk actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const mockResponse = (status, statusText, response) => {
      return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
          'Content-type': 'application/json'
        }
      });
    };

    it('calls RECEIVE_GAME when fetching Wikipedia article is done', () => {
      const expectedReply = {
        query: {
          pages: {
            8675309: {
              title: 'Super Mario World',
              extract: 'Lorem...'
            }
          }
        }
      };

      const expectedActions = [
        {
          type: duck.REQUEST_GAME,
          isFetching: true,
          isError: false
        },
        {
          type: duck.RECEIVE_GAME,
          isFetching: false,
          title: 'Super Mario World',
          text: 'Lorem...',
          image: createImageLink('Super Mario World')
        }
      ];

      const store = mockStore({
        isFetching: false,
        isError: false,
        title: '',
        text: '',
        image: 'not_found'
      });

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify(expectedReply)))
      );

      return store.dispatch(duck.fetchGame('Super Mario World')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('catches an error with HANDLE_WIKI_ERROR', () => {
      const expectedReply = {
        status: 404,
        statusText: 'Not Found'
      };

      const expectedActions = [
        {
          type: duck.REQUEST_GAME,
          isFetching: true,
          isError: false
        },
        {
          type: duck.HANDLE_WIKI_ERROR,
          isFetching: false,
          isError: true
        }
      ];

      const store = mockStore({
        isFetching: false,
        isError: false,
        title: '',
        text: '',
        image: 'not_found'
      });

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
        mockResponse(404, 'Not Found', JSON.stringify(expectedReply)))
      );

      return store.dispatch(duck.fetchGame('Super Mario World')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(duck.initialState);
    });

    it('should handle REQUEST_GAME', () => {
      expect(reducer(undefined, {
        type: duck.REQUEST_GAME,
        isFetching: true,
        isError: false
      })).toEqual({
        isFetching: true,
        isError: false,
        title: '',
        text: '',
        image: 'not_found'
      });
    });

    it('should handle RECEIVE_GAME', () => {
      const response = {
        title: 'Super Mario World',
        text: 'Lorem...',
        image: 'super_mario_world'
      };

      expect(reducer(undefined, {
        type: duck.RECEIVE_GAME,
        isFetching: false,
        ...response
      })).toEqual({
        isFetching: false,
        isError: false,
        ...response
      });
    });
    it('should handle HANDLE_WIKI_ERROR', () => {
      expect(reducer(undefined, {
        type: duck.HANDLE_WIKI_ERROR,
        isFetching: false,
        isError: true
      })).toEqual({
        isFetching: false,
        isError: true,
        title: '',
        text: '',
        image: 'not_found'
      });
    });
  });
});
