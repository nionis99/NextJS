import { Reducer } from 'redux';
import { MoviesActions } from 'actions/movieActions';
import { MovieActionsTypes } from 'actions/movieActions/types';
import { Movie } from './types';

export interface MoviesState {
  movie: Movie | null;
  data: Movie[] | [];
  totalAmount: number;
  offset: number;
  limit: number;
  getMovieLoading: boolean;
  getMoviesLoading: boolean;
  addMovieLoading: boolean;
  editMovieLoading: boolean;
  deleteMovieLoading: boolean;
  getMovieError: string[] | [];
  getMoviesError: string[] | [];
  addMovieError: string[] | [];
  editMovieError: string[] | [];
  deleteMovieError: string[] | [];
}

export const initialState = {
  data: [],
  movie: null,
  totalAmount: 0,
  offset: 0,
  limit: 0,
  getMovieLoading: false,
  getMoviesLoading: false,
  addMovieLoading: false,
  editMovieLoading: false,
  deleteMovieLoading: false,
  getMovieError: [],
  getMoviesError: [],
  addMovieError: [],
  editMovieError: [],
  deleteMovieError: [],
};

const moviesReducer: Reducer<MoviesState, MovieActionsTypes> = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActions.FETCH_MOVIE:
      return { ...state, getMovieLoading: true };
    case MoviesActions.FETCH_MOVIES:
      return { ...state, getMoviesLoading: true };
    case MoviesActions.ADD_MOVIE:
      return { ...state, addMovieLoading: true };
    case MoviesActions.EDIT_MOVIE:
      return { ...state, editMovieLoading: true };
    case MoviesActions.DELETE_MOVIE:
      return { ...state, deleteMovieLoading: true };

    case MoviesActions.FETCH_MOVIE_FAIL:
      return { ...state, getMovieLoading: false, getMovieError: action.error };
    case MoviesActions.FETCH_MOVIES_FAIL:
      return { ...state, getMoviesLoading: false, getMoviesError: action.error };
    case MoviesActions.ADD_MOVIE_FAIL:
      return { ...state, addMovieLoading: false, addMovieError: action.error };
    case MoviesActions.EDIT_MOVIE_FAIL:
      return { ...state, editMovieLoading: false, editMovieError: action.error };
    case MoviesActions.DELETE_MOVIE_FAIL:
      return { ...state, deleteMovieLoading: false, deleteMovieError: action.error };
    case MoviesActions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        getMoviesLoading: false,
      };
    case MoviesActions.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        getMovieLoading: false,
      };
    case MoviesActions.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        totalAmount: state.totalAmount + 1,
        addMovieLoading: false,
      };
    case MoviesActions.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        data: state.data.map((data) => (data.id !== action.payload.id ? data : action.payload)),
        movie: state.movie?.id === action.payload.id ? action.payload : state.movie,
        editMovieLoading: false,
      };
    case MoviesActions.DELETE_MOVIE_SUCCESS:
      action.payload;
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
        totalAmount: state.totalAmount - 1,
        deleteMovieLoading: false,
      };

    default:
      return state;
  }
};

export default moviesReducer;
