import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppLogo from 'components/Logo';

export default {
  title: 'Components',
  component: AppLogo,
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => <AppLogo {...args} />;

export const DefaultLogo = Template.bind({});
DefaultLogo.args = {
  width: 150,
  height: 24,
};
