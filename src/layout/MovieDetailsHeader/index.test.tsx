import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import store from 'store';
import MovieDetailsHeader from './index';
import { testingConstants } from 'utils/Constants';
import { movieMockData } from '../../../__mocks__/data';

describe('Movie details header component', () => {
  const onClick = jest.fn();
  const wrapper = (
    <Provider store={store}>
      <MovieDetailsHeader movie={movieMockData} onSearchClick={onClick} />
    </Provider>
  );

  it('should render movie details header component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should be clicked and invoked onClick function passed in props', () => {
    const { getByText, getByTestId } = render(wrapper);
    expect.assertions(5);
    expect(getByText(movieMockData.title)).toBeInTheDocument();
    expect(getByText(moment(movieMockData.release_date).format('YYYY'))).toBeInTheDocument();
    expect(getByText(movieMockData.overview)).toBeInTheDocument();
    expect(getByText(movieMockData.vote_average)).toBeInTheDocument();
    fireEvent.click(getByTestId(testingConstants.searchButton));
    expect(onClick).toBeCalledTimes(1);
  });
});
