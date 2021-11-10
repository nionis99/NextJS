import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieFilters from 'components/MovieFilters';

export default {
  title: 'Components',
  component: MovieFilters,
} as ComponentMeta<typeof MovieFilters>;

const Template: ComponentStory<typeof MovieFilters> = () => <MovieFilters />;

export const Filters = Template.bind({});
Filters.args = {};
