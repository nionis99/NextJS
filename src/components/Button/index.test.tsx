import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

it('should render medium primary Button component', () => {
  const elem = renderer.create(<Button buttonTitle="Primary" variant="primary" size="medium" />).toJSON();
  expect(elem).toMatchSnapshot();
});

it('should render medium secondary Button component', () => {
  const elem = renderer.create(<Button buttonTitle="Secondary" variant="secondary" size="medium" />).toJSON();
  expect(elem).toMatchSnapshot();
});

it('should render medium outline-primary Button component', () => {
  const elem = renderer
    .create(<Button buttonTitle="Outline-primary" variant="outline-primary" size="medium" />)
    .toJSON();
  expect(elem).toMatchSnapshot();
});
