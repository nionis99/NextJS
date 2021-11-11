import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchMovie, fetchMovies } from 'actions/movieActions';
import useStateSelector from 'hooks/useStateSelector';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Footer from 'layout/Footer';
import { NextPage } from 'next';
import { ROUTES } from 'utils/Constants';
import { wrapper } from '../../store';
import { AnyAction } from 'redux';

interface Props {
  searchValue: string | string[];
  genreFilter: string | string[];
  sortByValue: string | string[];
  movieId: string | string[];
}

const MoviesPage: NextPage<Props> = ({ searchValue, movieId }) => {
  const { replace, pathname } = useRouter();
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

  const onMovieClick = (movieId: string) => replace({ pathname, search: `?movie=${movieId}` });

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {movieId && movie ? (
        <MovieDetailsHeader movie={movie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchHeader
          onSearchSubmit={onSearchSubmit}
          openAddMovie={onOpenAddMovieForm}
          defaultSearchValue={searchInputValue}
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

MoviesPage.getInitialProps = wrapper.getInitialPageProps((store) => async ({ query }) => {
  const { sortBy: sortByValue = 'genres', searchValue = '', genre: genreFilter = '', movie: movieId = '' } = query;

  if (movieId) await store.dispatch(fetchMovie(movieId) as unknown as AnyAction);
  await store.dispatch(fetchMovies(sortByValue, genreFilter, searchValue) as unknown as AnyAction);

  return { searchValue, movieId };
});

export default MoviesPage;
