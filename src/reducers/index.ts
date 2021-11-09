import { combineReducers } from 'redux';
import moviesReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
