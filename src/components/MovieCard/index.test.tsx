import '@testing-library/jest-dom';
import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import { MovieMockData } from '../../../__mocks__/data';
import { testingConstants } from 'utils/Constants';
import MovieCard from './index';
import store from 'store';

describe('Movie card component', () => {
  const onClick = jest.fn();
  const wrapper = (
    <Provider store={store}>
      <BrowserRouter>
        <MovieCard movie={MovieMockData} onClick={onClick} />
      </BrowserRouter>
    </Provider>
  );

  it('should render movie card component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should be clicked and invoked onClick function passed in props', () => {
    const { getByText, getByTestId } = render(wrapper);
    expect.assertions(3);
    expect(getByText(MovieMockData.title)).toBeInTheDocument();
    expect(getByText(moment(MovieMockData.release_date).format('YYYY'))).toBeInTheDocument();
    fireEvent.click(getByTestId(testingConstants.movieCard));
    expect(onClick).toBeCalledTimes(1);
  });
});
