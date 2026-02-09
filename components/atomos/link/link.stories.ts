import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'Atomos/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'externo'],
    },
    theme: {
      control: { type: 'radio' },
      options: ['default', 'dark'],
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Internal: Story = {
  args: {
    children: 'Link Interno',
    href: '/',
    variant: 'internal',
  },
};

export const External: Story = {
  args: {
    variant: 'external',
    href: 'https://google.com',
    children: 'Link externo ↗',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};



export const Navbar: Story = {
  args: {
    children: 'Link Navbar',
    href: '/',
    variant: 'navbar',
    theme: 'default'
  },
};

export const Footer: Story = {
  args: {
    children: 'Link Footer',
    href: '/',
    variant: 'footer',
    theme: 'default'
  },
};


