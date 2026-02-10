import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Atomos/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'disabled'],
    },
  },
  args: {
    children: 'Email',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
};
