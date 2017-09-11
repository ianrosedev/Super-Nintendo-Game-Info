import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currentGame from './currentGame';
import searchableGamesList from './searchableGamesList';
import gameDetail from './gameDetail';
import selectedVideosList from './selectedVideosList';

  const rootReducer = combineReducers({
  currentGame,
  searchableGamesList,
  gameDetail,
  selectedVideosList
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
