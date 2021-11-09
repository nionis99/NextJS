import React from 'react';
import renderer from 'react-test-renderer';
import MovieFilters from './index';
import '../../../__mocks__/useRouter';

describe('Movie filters', () => {
  it('should render movie filters component', () => {
    const elem = renderer.create(<MovieFilters />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
