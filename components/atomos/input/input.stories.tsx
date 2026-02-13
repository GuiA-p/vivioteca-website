import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FiSearch } from 'react-icons/fi';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Atomos/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'search', 'error'],
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Digite aqui...',
  },
};

export const Search: Story = {
  args: {
    variant: 'search',
    placeholder: 'Pesquisar ...',
    leftIcon: <FiSearch size={18} />,
  },
};

export const WithError: Story = {
  args: {
    variant: 'error',
    placeholder: 'Campo com erro',
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Com ícone à esquerda',
    leftIcon: <FiSearch size={18} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Com ícone à direita',
    rightIcon: <FiSearch size={18} />,
  },
};
