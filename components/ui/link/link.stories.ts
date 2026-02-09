import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'externo'],
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
    variant: 'default',
  },
}

export const External: Story = {
  args: {
    variant: 'outline',
    href: 'https://google.com',
    children: 'Link externo ↗',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
}

