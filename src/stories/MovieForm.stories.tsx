import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormOfMovie from 'components/MovieForm';

export default {
  title: 'Components',
  component: FormOfMovie,
} as ComponentMeta<typeof FormOfMovie>;

const Template: ComponentStory<typeof FormOfMovie> = (args) => <FormOfMovie {...args} />;

export const MovieForm = Template.bind({});
MovieForm.args = {};
