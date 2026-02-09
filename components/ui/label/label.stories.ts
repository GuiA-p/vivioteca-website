import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'disabled'],
    },
  },
  args: {
    children: 'Email',
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
}
