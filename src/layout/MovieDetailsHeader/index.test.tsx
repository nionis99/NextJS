import '@testing-library/jest-dom';
import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import { MovieMockData } from '../../../__mocks__/data';
import { testingConstants } from 'utils/Constants';
import store from 'store';
import MovieDetailsHeader from './index';

describe('Movie details header component', () => {
  const onClick = jest.fn();
  const wrapper = (
    <Provider store={store}>
      <BrowserRouter>
        <MovieDetailsHeader movie={MovieMockData} onSearchClick={onClick} />
      </BrowserRouter>
    </Provider>
  );

  it('should render movie details header component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should be clicked and invoked onClick function passed in props', () => {
    const { getByText, getByTestId } = render(wrapper);
    expect.assertions(5);
    expect(getByText(MovieMockData.title)).toBeInTheDocument();
    expect(getByText(moment(MovieMockData.release_date).format('YYYY'))).toBeInTheDocument();
    expect(getByText(MovieMockData.overview)).toBeInTheDocument();
    expect(getByText(MovieMockData.vote_average)).toBeInTheDocument();
    fireEvent.click(getByTestId(testingConstants.searchButton));
    expect(onClick).toBeCalledTimes(1);
  });
});
