import { Movie, Movies } from 'reducers/movieReducer/types';
import { MoviesActions } from './index';

interface FetchMovies {
  type: MoviesActions.FETCH_MOVIES;
}

interface FetchMoviesSuccess {
  type: MoviesActions.FETCH_MOVIES_SUCCESS;
  payload: Movies;
}

interface FetchMoviesFail {
  type: MoviesActions.FETCH_MOVIES_FAIL;
  error: string[];
}

interface FetchMovie {
  type: MoviesActions.FETCH_MOVIE;
}

interface FetchMovieSuccess {
  type: MoviesActions.FETCH_MOVIE_SUCCESS;
  payload: Movie;
}

interface FetchMovieFail {
  type: MoviesActions.FETCH_MOVIE_FAIL;
  error: string[];
}

interface AddMovie {
  type: MoviesActions.ADD_MOVIE;
}

interface AddMovieSuccess {
  type: MoviesActions.ADD_MOVIE_SUCCESS;
  payload: Movie;
}

interface AddMovieFail {
  type: MoviesActions.ADD_MOVIE_FAIL;
  error: string[];
}

interface DeleteMovie {
  type: MoviesActions.DELETE_MOVIE;
}

interface DeleteMovieSuccess {
  type: MoviesActions.DELETE_MOVIE_SUCCESS;
  payload: number;
}

interface DeleteMovieFail {
  type: MoviesActions.DELETE_MOVIE_FAIL;
  error: string[];
}

interface EditMovie {
  type: MoviesActions.EDIT_MOVIE;
}

interface EditMovieSuccess {
  type: MoviesActions.EDIT_MOVIE_SUCCESS;
  payload: Movie;
}

interface EditMovieFail {
  type: MoviesActions.EDIT_MOVIE_FAIL;
  error: string[];
}

export type MovieActionsTypes =
  | FetchMovies
  | FetchMoviesSuccess
  | FetchMoviesFail
  | FetchMovie
  | FetchMovieSuccess
  | FetchMovieFail
  | AddMovie
  | AddMovieSuccess
  | AddMovieFail
  | EditMovie
  | EditMovieSuccess
  | EditMovieFail
  | DeleteMovie
  | DeleteMovieSuccess
  | DeleteMovieFail;
