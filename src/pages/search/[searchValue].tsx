import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchMovie, fetchMovies } from 'actions/movieActions';
import useStateSelector from 'hooks/useStateSelector';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Footer from 'layout/Footer';
import { ROUTES } from 'utils/Constants';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { replace, query, pathname } = useRouter();
  const { searchValue = '', genre: genreFilter = '', sortBy: sortByValue = 'genres', movie: movieId = '' } = query;
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState(searchValue);

  const {
    totalAmount,
    getMoviesLoading,
    data: movies,
    movie,
    getMoviesError,
  } = useStateSelector((state) => state.movies);

  const onSearchIconClick = () => replace(ROUTES.search);
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);

  const onSearchSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return searchInputValue ? replace(`${ROUTES.search}/${searchInputValue}`) : replace(ROUTES.search);
  };

  const onMovieClick = (movieId: string) => {
    return replace({ pathname, search: `?movie=${movieId}` }, `${ROUTES.search}/${searchInputValue}?movie=${movieId}`);
  };

  useEffect(() => {
    dispatch(fetchMovies(sortByValue, genreFilter, searchValue));
  }, [dispatch, sortByValue, genreFilter, searchValue]);

  useEffect(() => {
    if (movieId) dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {movieId && movie ? (
        <MovieDetailsHeader movie={movie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchHeader
          onSearchSubmit={onSearchSubmit}
          openAddMovie={onOpenAddMovieForm}
          defaultSearchValue={searchValue}
          setSearchValue={setSearchInputValue}
        />
      )}
      <Content
        totalMovies={totalAmount}
        getMoviesLoading={getMoviesLoading}
        getMoviesError={getMoviesError}
        movies={movies}
        onMovieClick={onMovieClick}
      />
      <Footer />
    </>
  );
};

export default MoviesPage;
