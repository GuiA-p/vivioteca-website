import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Footer } from './footer';

const meta: Meta<typeof Footer> = {
  title: 'Organismos/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['desktop', 'tablet', 'mobile'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    size: 'desktop',
  },
};
