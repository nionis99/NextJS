import React from 'react';
import renderer from 'react-test-renderer';
import MovieForm from './index';
import { movieMockData } from '../../../__mocks__/data';

describe('Movie form', () => {
  const onSubmit = jest.fn();

  it('should render movie form w/o data with loading button', () => {
    const elem = renderer.create(<MovieForm isLoading={true} onSubmit={onSubmit} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should render movie form with filled data', () => {
    const elem = renderer.create(<MovieForm movie={movieMockData} isLoading={false} onSubmit={onSubmit} />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
