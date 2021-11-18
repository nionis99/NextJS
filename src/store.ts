import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MovieActionsTypes } from './actions/movieActions/types';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export type AppStore = ReturnType<typeof initStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type RootActions = MovieActionsTypes;

export const initStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const wrapper = createWrapper<AppStore>(initStore);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
