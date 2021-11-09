import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import ArrowDown from 'assets/icons/arrowDown.svg';
import useQuery from 'hooks/useQuery';

const defaultTabClassName =
  'text-white p-1 md:p-5 cursor-pointer hover:text-primary focus:outline-none uppercase font-medium border-b-2';

const sortOptions = [
  { name: 'Genres', value: 'genres' },
  { name: 'Rating', value: 'vote_average' },
  { name: 'Release date', value: 'release_date' },
];

const MovieFilters = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const { currentQuery, addQuery } = useQuery();
  const genreFilter = currentQuery.get('genre');
  const sortByValue = currentQuery.get('sortBy');

  const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => addQuery('sortBy', event.target.value);

  const onFilterClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const selectedFilter = event.currentTarget.innerText[0] + event.currentTarget.innerText.substring(1).toLowerCase();
    addQuery('genre', selectedFilter);
  };

  return (
    <nav className={cx('flex flex-row overflow-auto', className)}>
      <span
        className={cx(defaultTabClassName, genreFilter === 'All' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        All
      </span>
      <span
        className={cx(
          defaultTabClassName,
          genreFilter === 'Documentary' ? 'border-primary text-primary' : 'text-white',
        )}
        onClick={onFilterClick}
      >
        Documentary
      </span>
      <span
        className={cx(defaultTabClassName, genreFilter === 'Comedy' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        Comedy
      </span>
      <span
        className={cx(defaultTabClassName, genreFilter === 'Horror' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        Horror
      </span>
      <span
        className={cx(defaultTabClassName, genreFilter === 'Crime' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        Crime
      </span>
      <span className="cursor-default mx-auto w-full border-b-2" />
      <span className="text-white p-1 md:p-5 uppercase font-normal border-b-2 text-opacity-50 whitespace-nowrap">
        Sort by
      </span>
      <div className="relative">
        <select
          className="appearance-none w-auto bg-transparent text-white p-1 md:p-5 pr-4 border-b-2 font-medium
          focus:outline-none truncate cursor-pointer"
          onChange={onSortChange}
          defaultValue={sortByValue || 'genres'}
        >
          {sortOptions.map((sortOption, index) => (
            <option key={index} value={sortOption.value}>
              {sortOption.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 -right-2 flex items-center px-2 text-gray-700">
          <ArrowDown className="fill-current h-3 w-3" />
        </div>
      </div>
    </nav>
  );
};

export default MovieFilters;
