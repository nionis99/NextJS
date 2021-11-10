import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorBoundaryView from 'components/ErrorBoundaryView';

export default {
  title: 'Components/Layout',
  component: ErrorBoundaryView,
} as ComponentMeta<typeof ErrorBoundaryView>;

const Template: ComponentStory<typeof ErrorBoundaryView> = (args) => <ErrorBoundaryView {...args} />;

export const ErrorBoundary = Template.bind({});
ErrorBoundary.args = {};
