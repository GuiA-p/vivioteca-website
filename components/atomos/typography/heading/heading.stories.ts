import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Atomos/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Define o estilo visual e o nível do título',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description:
        'Define a tag HTML semântica (caso queira diferente do visual)',
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'muted'],
    },
    align: {
      control: 'inline-radio',
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Título de Exemplo H1',
    level: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Título de Exemplo H2',
    level: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Título de Exemplo H3',
    level: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'Título de Exemplo H4',
    level: 'h4',
  },
};

export const H5: Story = {
  args: {
    children: 'Título de Exemplo H5',
    level: 'h5',
  },
};

export const H6: Story = {
  args: {
    children: 'Título de Exemplo H6',
    level: 'h6',
  },
};
