import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormInput from 'components/Input';

export default {
  title: 'Components',
  component: FormInput,
  argTypes: {
    type: {
      options: ['date', 'text', 'number'],
      control: { type: 'select' },
    },
    errorMessage: {
      options: ['Oops something wrong with input', undefined],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Input = Template.bind({});
Input.args = {
  className: 'w-full md:w-1/2',
  label: 'label',
  placeholder: '',
};
