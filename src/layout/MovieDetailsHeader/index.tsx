import React, { HTMLAttributes } from 'react';
import moment from 'moment';
import useStateSelector from 'hooks/useStateSelector';
import Loader from 'components/Loader';
import SearchButton from 'assets/icons/searchButton.svg';
import NotFoundImage from 'assets/images/not_found.png';
import { Movie } from 'reducers/movieReducer/types';
import { testingConstants } from 'utils/Constants';

interface MovieDetailsHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onSearchClick: () => void;
  movie: Movie;
}

const MovieDetailsHeader = ({ onSearchClick, movie, className = '', ...rest }: MovieDetailsHeaderProps) => {
  const { getMovieLoading } = useStateSelector((state) => state.movies);
  const { poster_path, title, genres, release_date, overview, vote_average, runtime } = movie;
  const yearsOfTheMovie = moment(release_date).format('YYYY');
  const durationInHours = `${(runtime / 60).toFixed(0)}h ${(runtime % 60).toString()}min`;

  return (
    <header className={`flex-col bg-content py-2 md:py-5 px-4 md:px-16 text-white  ${className}`} {...rest}>
      {getMovieLoading ? (
        <Loader className="w-32 h-32" />
      ) : (
        <>
          <div className="flex w-full justify-between items-center">
            <span className="font-light text-primary">netflixroulette</span>
            <span className="ml-auto">
              <SearchButton
                className="cursor-pointer"
                onClick={onSearchClick}
                data-testid={testingConstants.searchButton}
              />
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center pt-6">
            <div className="flex w-full md:w-1/3 justify-center items-center h-auto">
              <img
                alt={title}
                src={poster_path}
                width={400}
                height={200}
                onError={(event) => (event.currentTarget.src = NotFoundImage)}
              />
            </div>
            <div className="w-full md:w-2/3 px-8">
              <p className="flex font-light justify-center md:justify-start pt-3 md:pt-0">
                <span className="flex justify-center items-center text-4xl">{title}</span>
                <span
                  className="flex ml-8 items-center justify-center p-3 h-14 w-14 rounded-full border-2 border-white
              text-2xl"
                >
                  {vote_average}
                </span>
              </p>
              <p className="flex text-white text-opacity-50 justify-center md:justify-start pt-3 md:pt-0">
                {genres.join(', ')}
              </p>
              <p className="flex py-8 text-primary font-light justify-center md:justify-start text-2xl">
                <span className="mr-8">{yearsOfTheMovie}</span>
                <span>{durationInHours}</span>
              </p>
              <p className="text-white text-opacity-50">{overview}</p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default MovieDetailsHeader;
