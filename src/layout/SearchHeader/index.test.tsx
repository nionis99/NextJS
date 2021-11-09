import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { MovieMockData } from '../../../__mocks__/data';
import SearchHeader from './index';
import constants, { testingConstants } from 'utils/Constants';

describe('Movie search header component', () => {
  const onClickAddMovie = jest.fn();
  const onSearchSubmit = jest.fn().mockImplementation((e) => e.preventDefault());
  const setSearchValue = jest.fn();
  const wrapper = (
    <SearchHeader
      onSearchSubmit={onSearchSubmit}
      setSearchValue={setSearchValue}
      defaultSearchValue={MovieMockData.title}
      openAddMovie={onClickAddMovie}
    />
  );

  it('should render movie search header component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should call onSubmit function', () => {
    const { getByText, getByTestId } = render(wrapper);
    expect.assertions(3);
    expect(getByText(constants.headerTitle)).toBeInTheDocument();
    fireEvent.change(getByTestId(testingConstants.searchHeaderInput), { target: { value: MovieMockData.title } });
    expect(getByTestId(testingConstants.searchHeaderInput)).toHaveValue(MovieMockData.title);
    fireEvent.click(getByTestId(testingConstants.searchSubmitButton));
    expect(onSearchSubmit).toBeCalledTimes(1);
  });
});
