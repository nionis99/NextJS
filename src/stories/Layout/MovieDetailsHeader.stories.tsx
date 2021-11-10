import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderWithDetails from 'layout/MovieDetailsHeader';
import { Provider } from 'react-redux';
import { movieMockData } from '../../../__mocks__/data';
import store from 'store';

export default {
  title: 'Components/Layout',
  component: HeaderWithDetails,
} as ComponentMeta<typeof HeaderWithDetails>;

const Template: ComponentStory<typeof HeaderWithDetails> = (args) => (
  <Provider store={store}>
    <HeaderWithDetails {...args} />
  </Provider>
);

export const MovieDetailsHeader = Template.bind({});
MovieDetailsHeader.args = {
  movie: movieMockData,
};
