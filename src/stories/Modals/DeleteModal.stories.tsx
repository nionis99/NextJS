import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeleteModal from 'components/Modals/DeleteConfirmation';

export default {
  title: 'Components/Modals',
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => <DeleteModal {...args} />;

export const DeleteConfirmation = Template.bind({});
DeleteConfirmation.args = {
  isOpen: true,
  title: 'Delete movie',
  description: 'Are you sure you want to delete this movie?',
};
