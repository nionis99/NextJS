import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from 'actions/movieActions';
import { Movie } from 'reducers/movieReducer/types';
import useStateSelector from 'hooks/useStateSelector';
import MovieForm, { IMovieForm } from 'components/MovieForm';
import Modal from 'containers/Modal';
import moment from 'moment';

interface MovieModalProps {
  movie?: Movie;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MovieFormModal = ({ movie, isOpen, onClose, title }: MovieModalProps) => {
  const { editMovieLoading, addMovieLoading } = useStateSelector((state) => state.movies);
  const isLoading = addMovieLoading || editMovieLoading;
  const dispatch = useDispatch();

  const onSubmit = (data: IMovieForm) => {
    const convertedData = {
      ...data,
      runtime: parseInt(data.runtime),
      vote_average: parseFloat(data.vote_average) || undefined,
      release_date: data.release_date || moment().format('YYYY-MM-DD'),
    };
    return movie
      ? dispatch(editMovie({ ...convertedData, id: movie.id }, onClose))
      : dispatch(addMovie(convertedData, onClose));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} close>
      <MovieForm movie={movie} isLoading={isLoading} onSubmit={onSubmit} />
    </Modal>
  );
};

export default MovieFormModal;
