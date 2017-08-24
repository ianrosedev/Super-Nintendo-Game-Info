import { combineReducers } from 'redux';
import gameDetail from './gameDetail';
import selectedVideosList from './selectedVideosList';

export const rootReducer = combineReducers({
  gameDetail,
  selectedVideosList
});
