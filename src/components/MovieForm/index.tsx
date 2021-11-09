import React, { useState } from 'react';
import * as Yup from 'yup';
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Movie } from 'reducers/movieReducer/types';
import GenresInput from 'components/GenresInput';
import Loader from 'components/Loader';
import Input from 'components/Input';
import Button from 'components/Button';
import { genres } from '../../../__mocks__/data';
import { testingConstants } from 'utils/Constants';

interface MovieFormProps {
  movie?: Movie;
  isLoading: boolean;
  onSubmit: (data: IMovieForm) => void;
}

export interface IMovieForm {
  id: number;
  title: string;
  poster_path: string;
  genres: string[];
  release_date: string;
  runtime: string;
  vote_average: string;
  overview: string;
}

const MovieForm = ({ movie, isLoading, onSubmit }: MovieFormProps) => {
  const defaultValues = {
    ...movie,
    genres: movie?.genres || [],
    runtime: movie?.runtime.toString(),
    vote_average: movie?.vote_average?.toString(),
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
    getValues,
  } = useForm<IMovieForm>({
    mode: 'all',
    resolver: yupResolver(MovieFormSchema),
    defaultValues,
  });

  const [selectedGenres, setSelectedGenres] = useState<string[]>(getValues().genres || []);
  const onReset = () => {
    setSelectedGenres(movie?.genres || []);
    reset(defaultValues);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Input
          className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
          label="Title"
          type="text"
          register={{ ...register('title') }}
          placeholder="Movie title"
          defaultValue={movie ? movie.title : ''}
          errorMessage={formErrors.title?.message}
        />
        <Input
          className="w-full sm:w-1/3 px-3"
          label="Release date"
          type="date"
          register={{ ...register('release_date') }}
          placeholder="Select Date"
          defaultValue={movie?.release_date}
          errorMessage={formErrors.release_date?.message}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Input
          className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
          label="Movie url"
          type="text"
          register={{ ...register('poster_path') }}
          placeholder="https://"
          defaultValue={movie?.poster_path}
          errorMessage={formErrors.poster_path?.message}
        />
        <Input
          className="w-full sm:w-1/3 px-3"
          label="Rating"
          type="number"
          register={{ ...register('vote_average') }}
          min="0"
          max="10"
          step="0.1"
          placeholder="7.8"
          defaultValue={movie?.vote_average}
          errorMessage={formErrors.vote_average?.message}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <GenresInput
          control={control}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
          label="Genre"
          getValues={getValues}
          errorMessage={(formErrors.genres as FieldError | undefined)?.message}
          options={genres}
        />
        <Input
          className="w-full sm:w-1/3 px-3 mb-6 md:mb-0"
          label="runtime"
          register={{ ...register('runtime') }}
          placeholder="minutes"
          type="number"
          step="1"
          min="1"
          defaultValue={movie?.runtime}
          errorMessage={formErrors.runtime?.message}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className={`block uppercase tracking-wide text-xs font-bold mb-2 upper-case ${
              formErrors.overview ? 'text-red-500' : 'text-primary'
            }`}
          >
            Overview
          </label>
          <textarea
            defaultValue={movie?.overview}
            className={`appearance-none w-full bg-gray80  ${
              formErrors.overview ? 'border-red-500' : 'border-gray80'
            } text-white border rounded py-2 px-4 mb-3
            leading-tight focus:outline-none focus:border-gray-200 resize-none`}
            placeholder="Movie description"
            {...register('overview')}
            rows={6}
            data-testid={testingConstants.movieOverviewTextarea}
          />
          {formErrors.overview && <p className="text-red-500 text-xs italic">{formErrors.overview.message}</p>}
        </div>
      </div>
      <div className="flex flex-row w-full">
        <Button
          buttonTitle="Reset"
          className="ml-auto mr-4"
          variant="outline-primary"
          size="medium"
          type="reset"
          onClick={onReset}
        />
        <Button
          buttonTitle={isLoading ? <Loader className="w-6 h-6" /> : movie ? 'Edit' : 'Submit'}
          variant="primary"
          size="medium"
          data-testid={testingConstants.submitMovieForm}
        />
      </div>
    </form>
  );
};

const MovieFormSchema = Yup.object().shape({
  genres: Yup.array().min(1, 'select at least one'),
  title: Yup.string().required().max(40, 'should be less then 40 characters'),
  poster_path: Yup.string().url('movie poster must be a valid URL').required('URL to the poster image is required'),
  runtime: Yup.number().typeError('runtime must be a number').positive('runtime must be greater than zero'),
  rating: Yup.number()
    .typeError('rating must be a number')
    .positive('rating must be greater than zero')
    .max(10, 'rating can not exceed 10'),
  overview: Yup.string().required(),
});

export default MovieForm;
