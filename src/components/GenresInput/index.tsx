import React, { useEffect, useRef, useState } from 'react';
import { Control, Controller, UseFormGetValues } from 'react-hook-form';
import ArrowDown from 'assets/icons/arrowDown.svg';
import { IMovieForm } from 'components/MovieForm';
import { testingConstants } from 'utils/Constants';
import cx from 'classnames';

interface SelectInputProps {
  control: Control<IMovieForm>;
  selectedGenres: string[] | [];
  setSelectedGenres: (genres: string[] | []) => void;
  label: string;
  options: string[];
  getValues: UseFormGetValues<IMovieForm>;
  errorMessage?: string;
  className?: string;
}

const GenresInput = ({
  control,
  selectedGenres,
  setSelectedGenres,
  label,
  options,
  getValues,
  errorMessage,
  className,
}: SelectInputProps) => {
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleGenreSelection = () => setIsOptionsShown((isShown) => !isShown);

  const handleCheck = (genre: string) => {
    const { genres } = getValues();
    const selectedGenres = genres?.includes(genre)
      ? genres.filter((selectedGenre) => selectedGenre !== genre)
      : [...(genres ?? []), genre];
    setSelectedGenres(selectedGenres);
    return selectedGenres;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOptionsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={className}>
      {label && (
        <label
          className={`block uppercase tracking-wide ${
            errorMessage ? 'text-red-500' : 'text-primary'
          } text-xs font-bold mb-2`}
        >
          {label}
        </label>
      )}
      <div className="flex flex-row relative">
        <div
          ref={selectRef}
          className={`flex flex-row appearance-none w-full bg-gray80 border ${
            errorMessage ? 'border-red-500' : 'border-gray80'
          } text-white h-12 py-2 px-4 rounded leading-tight focus:outline-none focus:border-gray-200 cursor-pointer`}
          onClick={toggleGenreSelection}
          data-testid={testingConstants.genresOptionsInput}
        >
          <span className="flex items-center justify-start select-none">
            {selectedGenres?.length > 0 ? selectedGenres.join(', ') : 'Select genre'}
          </span>
          <div className="flex ml-auto items-center">
            <ArrowDown
              className={cx('flex justify-end items-center fill-current h-3 w-3', {
                'transform rotate-180': isOptionsShown,
              })}
            />
          </div>
          <Controller
            name="genres"
            control={control}
            render={({ field: { onChange } }) => (
              <ul
                className={cx(
                  'absolute w-full right-0 top-10 py-1 mt-2 bg-white bg-content z-2 shadow-modal select-none',
                  { hidden: !isOptionsShown },
                )}
              >
                {options.map((genre, index) => (
                  <li key={index} className="flex flex-row text-white w-full">
                    <input
                      className="m-auto"
                      type="checkbox"
                      id={genre}
                      name={genre}
                      checked={getValues().genres?.includes(genre) || false}
                      onChange={() => onChange(handleCheck(genre))}
                    />
                    <label className="flex ml-2 px-4 py-2 w-full cursor-pointer" htmlFor={genre}>
                      {genre}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          />
        </div>
      </div>
      {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export default GenresInput;
