import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from 'layout/Footer';

export default {
  title: 'Components/Layout',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const FooterWithLogo = Template.bind({});
FooterWithLogo.args = {
  className: 'bg-footer',
};
