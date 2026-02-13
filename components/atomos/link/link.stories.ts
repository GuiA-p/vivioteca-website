import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'Atomos/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['internal', 'subgect', 'external', 'navbar', 'footer', 'aside'],
    },
    underline: {
      control: 'boolean',
    },
    externalIcon: {
      control: 'boolean',
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

export const Subgect: Story = {
  args: {
    children: 'Category',
    href: '/',
    variant: 'subgect',
  },
};

export const External: Story = {
  args: {
    children: 'Link Externo com Ícone',
    href: 'https://google.com',
    variant: 'external',
    externalIcon: true,
  },
};

export const NavbarLink: Story = {
  args: {
    children: 'Menu',
    href: '/menu',
    variant: 'navbar',
  },
};

export const FooterLink: Story = {
  args: {
    children: 'Privacidade',
    href: '/privacy',
    variant: 'footer',
  },
};
