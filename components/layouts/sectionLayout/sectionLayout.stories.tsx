import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SectionLayout } from './sectionLayout';

const meta: Meta<typeof SectionLayout> = {
  title: 'Layout/SectionLayout',
  component: SectionLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    background: {
      control: 'radio',
      options: ['default', 'muted', 'primary'],
    },
    container: {
      control: 'radio',
      options: ['default', 'narrow', 'wide', 'full'],
    },
    padding: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg'],
    },
    spacing: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionLayout>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2 className="text-2xl font-bold">Título da Seção</h2>
        <p>Conteúdo exemplo dentro da section.</p>
      </>
    ),
  },
};

export const MutedBackground: Story = {
  args: {
    background: 'muted',
    children: (
      <>
        <h2 className="text-2xl font-bold">Seção com fundo muted</h2>
        <p>Conteúdo com background diferenciado.</p>
      </>
    ),
  },
};

export const WideContainer: Story = {
  args: {
    container: 'wide',
    children: (
      <>
        <h2 className="text-2xl font-bold">Container Wide</h2>
        <p>Conteúdo ocupando largura maior.</p>
      </>
    ),
  },
};

export const PrimaryBackground: Story = {
  args: {
    background: 'primary',
    children: (
      <>
        <h2 className="text-2xl font-bold">Seção Primária</h2>
        <p>Exemplo com fundo azul.</p>
      </>
    ),
  },
};
