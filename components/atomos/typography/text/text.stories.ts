import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text'; // Ajuste o caminho conforme seu projeto

const meta: Meta<typeof Text> = {
  title: 'Atomos/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
    },
    weight: {
      control: 'inline-radio',
      options: ['normal', 'medium', 'bold'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'muted', 'white'],
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'label', 'div'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Paragraph: Story = {
  args: {
    children: 'Este é um parágrafo padrão para textos longos de leitura.',
    size: 'base',
    variant: 'default',
  },
};

export const SmallMuted: Story = {
  args: {
    children: 'Este texto é menor e possui cor secundária (muted).',
    size: 'sm',
    variant: 'muted',
  },
};

export const BoldLarge: Story = {
  args: {
    children: 'Texto em destaque com peso negrito e tamanho XL.',
    size: 'xl',
    weight: 'bold',
  },
};

export const AsLabel: Story = {
  args: {
    children: 'Este texto está usando a tag <label>',
    as: 'label',
    weight: 'medium',
    size: 'sm',
  },
};
