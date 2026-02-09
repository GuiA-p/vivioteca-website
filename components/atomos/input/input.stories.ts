import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Atomos/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'search'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InputForm: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Digite aqui...',
  },
};

export const InputSearch: Story = {
  args: {
    variant: 'search',
    placeholder: 'Pesquise aqui...',
  },
};
