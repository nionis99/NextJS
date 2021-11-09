import React from 'react';
import renderer from 'react-test-renderer';
import Landing from './index';

it('should render landing component', () => {
  const elem = renderer
    .create(
      <Landing>
        <div>TEST</div>
      </Landing>,
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
