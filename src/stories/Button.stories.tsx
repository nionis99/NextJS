import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'components/Button';

export default {
  title: 'Components',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  buttonTitle: 'SEARCH',
  variant: 'primary',
  size: 'large',
};
