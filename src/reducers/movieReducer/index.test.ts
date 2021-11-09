import movieReducer, { initialState } from 'reducers/movieReducer/index';
import { MoviesActions } from 'actions/movieActions';
import { MovieMockData } from '../../../__mocks__/data';

describe('movie reducer', () => {
  const errorMessage = ['Error!'];

  it('should return the initial state', () => {
    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    expect(movieReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle FETCH_MOVIE', () => {
    expect(movieReducer(initialState, { type: MoviesActions.FETCH_MOVIE })).toEqual({
      ...initialState,
      getMovieLoading: true,
    });
  });

  it('should handle FETCH_MOVIES', () => {
    expect(movieReducer(initialState, { type: MoviesActions.FETCH_MOVIES })).toEqual({
      ...initialState,
      getMoviesLoading: true,
    });
  });

  it('should handle ADD_MOVIE', () => {
    expect(movieReducer(initialState, { type: MoviesActions.ADD_MOVIE })).toEqual({
      ...initialState,
      addMovieLoading: true,
    });
  });

  it('should handle EDIT_MOVIE', () => {
    expect(movieReducer(initialState, { type: MoviesActions.EDIT_MOVIE })).toEqual({
      ...initialState,
      editMovieLoading: true,
    });
  });

  it('should handle DELETE_MOVIE', () => {
    expect(movieReducer(initialState, { type: MoviesActions.DELETE_MOVIE })).toEqual({
      ...initialState,
      deleteMovieLoading: true,
    });
  });

  it('should handle FETCH_MOVIE_SUCCESS', () => {
    expect(movieReducer(initialState, { type: MoviesActions.FETCH_MOVIE_SUCCESS, payload: MovieMockData })).toEqual({
      ...initialState,
      movie: MovieMockData,
    });
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    const data = { data: [{ ...MovieMockData }], offset: 0, limit: 10, total: 1 };
    expect(movieReducer(initialState, { type: MoviesActions.FETCH_MOVIES_SUCCESS, payload: data })).toEqual({
      ...initialState,
      ...data,
    });
  });

  it('should handle ADD_MOVIE_SUCCESS', () => {
    const state = { ...initialState, data: [MovieMockData], totalAmount: 1 };
    const addedMovie = { ...MovieMockData, id: 1, title: (Math.random() + 1).toString(36).substring(4) };
    expect(movieReducer(state, { type: MoviesActions.ADD_MOVIE_SUCCESS, payload: addedMovie })).toEqual({
      ...initialState,
      data: [MovieMockData, addedMovie],
      totalAmount: 2,
    });
  });

  it('should handle EDIT_MOVIE_SUCCESS', () => {
    const state = { ...initialState, data: [MovieMockData], totalAmount: 1 };
    const editedData = { ...MovieMockData, title: (Math.random() + 1).toString(36).substring(4) };
    expect(movieReducer(state, { type: MoviesActions.EDIT_MOVIE_SUCCESS, payload: editedData })).toEqual({
      ...initialState,
      data: [editedData],
      totalAmount: 1,
    });
  });

  it('should handle DELETE_MOVIE_SUCCESS', () => {
    const state = { ...initialState, data: [MovieMockData], totalAmount: 1 };
    expect(movieReducer(state, { type: MoviesActions.DELETE_MOVIE_SUCCESS, payload: MovieMockData.id })).toEqual({
      ...initialState,
      data: [],
      totalAmount: 0,
    });
  });

  it('should handle FETCH_MOVIE_FAIL', () => {
    expect(movieReducer(initialState, { type: MoviesActions.FETCH_MOVIE_FAIL, error: errorMessage })).toEqual({
      ...initialState,
      getMovieError: errorMessage,
    });
  });

  it('should handle FETCH_MOVIES_FAIL', () => {
    expect(movieReducer(initialState, { type: MoviesActions.FETCH_MOVIES_FAIL, error: errorMessage })).toEqual({
      ...initialState,
      getMoviesError: errorMessage,
    });
  });

  it('should handle ADD_MOVIE_FAIL', () => {
    expect(movieReducer(initialState, { type: MoviesActions.ADD_MOVIE_FAIL, error: errorMessage })).toEqual({
      ...initialState,
      addMovieError: errorMessage,
    });
  });

  it('should handle EDIT_MOVIE_FAIL', () => {
    expect(movieReducer(initialState, { type: MoviesActions.EDIT_MOVIE_FAIL, error: errorMessage })).toEqual({
      ...initialState,
      editMovieError: errorMessage,
    });
  });

  it('should handle DELETE_MOVIE_FAIL', () => {
    expect(movieReducer(initialState, { type: MoviesActions.DELETE_MOVIE_FAIL, error: errorMessage })).toEqual({
      ...initialState,
      deleteMovieError: errorMessage,
    });
  });
});
