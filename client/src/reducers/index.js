import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currentGame from './currentGame/currentGame';
import searchableGamesList from './searchableGamesList/searchableGamesList';
import gameDetail from './gameDetail/gameDetail';
import selectedVideosList from './selectedVideosList/selectedVideosList';

const rootReducer = combineReducers({
  currentGame,
  searchableGamesList,
  gameDetail,
  selectedVideosList,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
