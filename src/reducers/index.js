import { combineReducers } from 'redux';
import gamesList from './gamesList';
import gameDetail from './gameDetail';
import selectedVideosList from './selectedVideosList';

export const rootReducer = combineReducers({
  gamesList,
  gameDetail,
  selectedVideosList
});
