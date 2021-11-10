import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchHeader from 'layout/SearchHeader';

export default {
  title: 'Components/Layout',
  component: SearchHeader,
} as ComponentMeta<typeof SearchHeader>;

const Template: ComponentStory<typeof SearchHeader> = (args) => <SearchHeader {...args} />;

export const HeaderWithSearch = Template.bind({});
HeaderWithSearch.args = {};
