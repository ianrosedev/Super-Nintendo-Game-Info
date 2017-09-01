import { combineReducers } from 'redux';
import currentGame from './currentGame';
import searchableGamesList from './searchableGamesList';
import gameDetail from './gameDetail';
import selectedVideosList from './selectedVideosList';

export const rootReducer = combineReducers({
  currentGame,
  searchableGamesList,
  gameDetail,
  selectedVideosList
});
