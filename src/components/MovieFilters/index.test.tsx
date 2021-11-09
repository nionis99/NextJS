import React from 'react';
import renderer from 'react-test-renderer';
// import { BrowserRouter } from 'react-router-dom';
import MovieFilters from './index';

describe('Movie filters', () => {
  const wrapper = (
    <BrowserRouter>
      <MovieFilters />
    </BrowserRouter>
  );

  it('should render movie filters component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
