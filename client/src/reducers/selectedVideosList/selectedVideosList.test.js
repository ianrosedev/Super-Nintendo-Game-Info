import reducer, * as duck from './selectedVideosList';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('selectedVideosList', () => {
  describe('actions', () => {
    it('setSelectedGame should create an action and set the selected game', () => {
      const game = 'Super Mario World';
      const expectedAction = {
        type: duck.SET_SELECTED_GAME,
        selectedGame: game
      };

      expect(duck.setSelectedGame(game)).toEqual(expectedAction);
    });

    it('requestVideos should create an action and set isFetching to true', () => {
      const expectedAction = {
        type: duck.REQUEST_VIDEOS,
        isFetching: true,
        isError: false
      };

      expect(duck.requestVideos()).toEqual(expectedAction);
    });

    it('receiveVideos should create an action and set the videos array', () => {
      const videos = ['foo', 'bar', 'baz'];
      const expectedAction = {
        type: duck.RECEIVE_VIDEOS,
        isFetching: false,
        videos: videos
      };

      expect(duck.receiveVideos(videos)).toEqual(expectedAction);
    });

    it('handleVideoError should create an action and set isError to true', () => {
      const expectedAction = {
        type: duck.HANDLE_VIDEO_ERROR,
        isFetching: false,
        isError: true
      };

      expect(duck.handleVideoError()).toEqual(expectedAction);
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

    it('calls RECEIVE_VIDEOS when fetching the YouTube videos is done', () => {
      const expectedReply = ['foo', 'bar', 'baz'];

      const expectedActions = [
        {
          type: duck.SET_SELECTED_GAME,
          selectedGame: 'Super Mario World'
        },
        {
          type: duck.REQUEST_VIDEOS,
          isFetching: true,
          isError: false
        },
        {
          type: duck.RECEIVE_VIDEOS,
          isFetching: false,
          videos: ['foo', 'bar', 'baz']
        }
      ];

      const store = mockStore({
        isFetching: false,
        isError: false,
        selectedGame: '',
        videos: []
      });

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify(expectedReply)))
      );

      return store.dispatch(duck.fetchVideos('Super Mario World')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('catches an error with HANDLE_VIDEO_ERROR', () => {
      const expectedReply = {
        status: 404,
        statusText: 'Not Found'
      };

      const expectedActions = [
        {
          type: duck.SET_SELECTED_GAME,
          selectedGame: 'Super Mario World'
        },
        {
          type: duck.REQUEST_VIDEOS,
          isFetching: true,
          isError: false
        },
        {
          type: duck.HANDLE_VIDEO_ERROR,
          isFetching: false,
          isError: true
        }
      ];

      const store = mockStore({
        isFetching: false,
        isError: false,
        selectedGame: '',
        videos: []
      });

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
        mockResponse(404, 'Not Found', JSON.stringify(expectedReply)))
      );

      return store.dispatch(duck.fetchVideos('Super Mario World')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(duck.initialState);
    });

    it('should handle SET_SELECTED_GAME', () => {
      const game ='Super Mario World';

      expect(reducer(undefined, {
        type: duck.SET_SELECTED_GAME,
        selectedGame: game
      })).toEqual({
        isFetching: false,
        isError: false,
        selectedGame: game,
        videos: []
      });
    });

    it('should handle REQUEST_VIDEOS', () => {
      expect(reducer(undefined, {
        type: duck.REQUEST_VIDEOS,
        isFetching: true,
        isError: false
      })).toEqual({
        isFetching: true,
        isError: false,
        selectedGame: '',
        videos: []
      });
    });

    it('should handle RECEIVE_VIDEOS', () => {
      const videos= ['foo', 'bar', 'baz'];

      expect(reducer(undefined, {
        type: duck.RECEIVE_VIDEOS,
        isFetching: false,
        videos: videos
      })).toEqual({
        isFetching: false,
        isError: false,
        selectedGame: '',
        videos: videos
      });
    });

    it('should handle HANDLE_VIDEO_ERROR', () => {
      expect(reducer(undefined, {
        type: duck.HANDLE_VIDEO_ERROR,
        isFetching: false,
        isError: true
      })).toEqual({
        isFetching: false,
        isError: true,
        selectedGame: '',
        videos: []
      });
    });
  });
});
