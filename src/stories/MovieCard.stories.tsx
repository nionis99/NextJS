import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import MovieCard from 'components/MovieCard';
import store from 'store';
import { movieMockData } from '../../__mocks__/data';

export default {
  title: 'Components',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <Provider store={store}>
    <div className="w-1/4">
      <MovieCard {...args} />
    </div>
  </Provider>
);

export const MovieItem = Template.bind({});
MovieItem.args = {
  movie: movieMockData,
};
