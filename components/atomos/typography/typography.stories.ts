import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './typography';

const meta: Meta<typeof Typography> = {
  title: 'Atomos/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'code'],
      description: 'Define o estilo visual do componente',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: 'Define a tag HTML semântica',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'h4',
  },
};

export const P: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'p',
  },
};

export const Blockquote: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'blockquote',
  },
};
export const Code: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'code',
  },
};

export const Polymorphic: Story = {
  args: {
    variant: 'h1',
    as: 'h3',
    children: 'Estilo de H1, mas tag HTML H3 (Inspecione no navegador)',
  },
};
