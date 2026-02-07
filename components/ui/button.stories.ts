import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';


const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'ghost'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};