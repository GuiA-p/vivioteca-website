import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './header';

const meta: Meta<typeof Header> = {
  title: 'Organismos/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  // Isso permite testar os tamanhos direto no Storybook
  argTypes: {
    size: {
      control: 'select',
      options: ['desktop', 'tablet', 'mobile'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    size: 'desktop',
  },
};
