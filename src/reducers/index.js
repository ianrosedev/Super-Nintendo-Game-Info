import { combineReducers } from 'redux';
import currentGame from './currentGame';
import gameDetail from './gameDetail';
import selectedVideosList from './selectedVideosList';

export const rootReducer = combineReducers({
  currentGame,
  gameDetail,
  selectedVideosList
});
