import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';


const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secundary', 'ghost', 'disable'] },
    size: { control: 'radio', options: ['sm','md' ,'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
    variant: 'primary',
  },
};

export const Secundary: Story = {
  args: {
    children: 'Secundary Button',
    variant: 'secundary',
  },
};


export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};


export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'disable',
  },
};

