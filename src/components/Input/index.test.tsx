import React from 'react';
import renderer from 'react-test-renderer';
import Input from './index';

it('should render Input component', () => {
  const elem = renderer.create(<Input label="Input" />).toJSON();
  expect(elem).toMatchSnapshot();
});

it('should render Input component with error message', () => {
  const elem = renderer.create(<Input label="Error input" errorMessage="Something wrong!" />).toJSON();
  expect(elem).toMatchSnapshot();
});
