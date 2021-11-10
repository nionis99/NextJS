import React from 'react';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieActionModal from 'components/Modals/MovieFormModal';
import store from 'store';

export default {
  title: 'Components/Modals',
  component: MovieActionModal,
} as ComponentMeta<typeof MovieActionModal>;

const Template: ComponentStory<typeof MovieActionModal> = (args) => (
  <Provider store={store}>
    <MovieActionModal {...args} />
  </Provider>
);

export const MovieFormModal = Template.bind({});
MovieFormModal.args = {
  isOpen: true,
  title: 'Add movie',
};
