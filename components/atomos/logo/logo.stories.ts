import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Atomos/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'dark', 'mono'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    hover: {
      control: 'boolean',
    },
    asLink: {
      control: 'boolean',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    src: '/logo/logo.svg',
    alt: 'Logo da Empresa',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    ...Default.args,
    size: 'xl',
  },
};

export const DarkVariant: Story = {
  args: {
    ...Default.args,
    variant: 'dark',
  },
};

export const Monochrome: Story = {
  args: {
    ...Default.args,
    variant: 'mono',
  },
};

export const WithoutLink: Story = {
  args: {
    ...Default.args,
    asLink: false,
  },
};

export const WithoutHover: Story = {
  args: {
    ...Default.args,
    hover: false,
  },
};

export const CustomImage: Story = {
  args: {
    src: 'https://via.placeholder.com/160x53/2563eb/ffffff?text=LOGO',
    alt: 'Logo Customizado',
  },
};
