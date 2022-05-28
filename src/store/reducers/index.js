import { combineReducers } from 'redux';
import { catsReducer } from './cats';
import { favoriteCatsReducer } from './favoriteCats';

export const rootReducer = combineReducers({
  cats: catsReducer,
  favoriteCats: favoriteCatsReducer
})