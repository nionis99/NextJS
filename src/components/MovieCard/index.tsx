import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import useStateSelector from 'hooks/useStateSelector';
import DeleteConfirmation from 'components/Modals/DeleteConfirmation';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Image from 'components/Image';
import { deleteMovie } from 'actions/movieActions';
import { Movie } from 'reducers/movieReducer/types';
import Dots from 'assets/icons/dots.svg';
import XIcon from 'assets/icons/x.svg';
import { ROUTES, testingConstants } from 'utils/Constants';
import moment from 'moment';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const dispatch = useDispatch();
  const { push, query } = useRouter();
  const { deleteMovieLoading } = useStateSelector((state) => state.movies);
  const { poster_path, title, release_date, genres } = movie;
  const [isBlurred, setIsBlurred] = useState(false);
  const [hasMoreActionSelected, setHasMoreActionSelected] = useState(false);
  const [isDeletingMovie, setIsDeletingMovie] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | undefined>();
  const yearsOfTheMovie = moment(release_date).format('YYYY');
  const isSelectedMovie = query.movie === movie.id.toString();

  const onCardMouseLeave = () => {
    if (hasMoreActionSelected) setHasMoreActionSelected(false);
    setIsBlurred(false);
  };

  const onEditMovieClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    setEditingMovie(movie);
  };

  const onDeleteMovieClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    setIsDeletingMovie(true);
  };

  const onDeleteMovieConfirmation = () => {
    dispatch(deleteMovie(movie.id, () => setIsDeletingMovie(false)));
    if (isSelectedMovie) return push(ROUTES.search);
  };

  const onMoreActionClose = (event: React.MouseEvent<SVGAElement>) => {
    event.stopPropagation();
    setHasMoreActionSelected(false);
  };

  const onMoreActionClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setHasMoreActionSelected(true);
  };

  return (
    <>
      <div
        className="flex-col cursor-pointer text-white text-opacity-75"
        onMouseEnter={() => setIsBlurred(true)}
        onMouseLeave={onCardMouseLeave}
        onClick={onClick}
        data-testid={testingConstants.movieCard}
      >
        <div className="relative pb-4">
          {isBlurred && (
            <>
              <div
                className="absolute top-2 right-2"
                onClick={onMoreActionClicked}
                data-testid={testingConstants.movieItemOptions}
              >
                <Dots />
              </div>
              {hasMoreActionSelected && (
                <ul className="absolute w-48 right-2 py-1 mt-2 bg-content rounded shadow-modal">
                  <p className="w-full p-1">
                    <XIcon className="ml-auto mb-1 mr-2 w-3 h-3" onClick={onMoreActionClose} />
                  </p>
                  <li
                    className="px-4 py-2 text-white hover:bg-primary"
                    onClick={onEditMovieClick}
                    data-testid={testingConstants.editMovieOption}
                  >
                    Edit
                  </li>
                  <li
                    className="px-4 py-2 text-white hover:bg-primary"
                    onClick={onDeleteMovieClick}
                    data-testid={testingConstants.removeMovieOption}
                  >
                    Delete
                  </li>
                </ul>
              )}
            </>
          )}
          <Image src={poster_path} alt={title} width={400} height={600} />
        </div>
        <p className="flex w-full">
          <span className="font-bold">{title}</span>
          <span className="ml-auto px-2 h-7 py-1 text-xs border-2 rounded-lg border-gray-400 border-opacity-50">
            {yearsOfTheMovie}
          </span>
        </p>
        <small>{genres.join(', ')}</small>
      </div>
      <MovieFormModal
        isOpen={!!editingMovie}
        onClose={() => setEditingMovie(undefined)}
        title="edit movie"
        movie={editingMovie}
      />
      <DeleteConfirmation
        isOpen={isDeletingMovie}
        title="Delete movie"
        description="Are you sure you want to delete this movie?"
        isLoading={deleteMovieLoading}
        onConfirm={onDeleteMovieConfirmation}
        onClose={() => setIsDeletingMovie(false)}
      />
    </>
  );
};

export default MovieCard;
