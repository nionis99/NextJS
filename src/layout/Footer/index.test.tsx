import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';

it('should render footer component', () => {
  const elem = renderer.create(<Footer />).toJSON();
  expect(elem).toMatchSnapshot();
});
