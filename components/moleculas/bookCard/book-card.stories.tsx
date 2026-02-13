import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';

import { BookCard } from './bookCard';

const meta: Meta<typeof BookCard> = {
  title: 'Moleculas/BookCard',
  component: BookCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'vertical',
    size: 'md',
  },
};
export default meta;
type Story = StoryObj<typeof BookCard>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <BookCard>
        <BookCard.Image
          src="https://via.placeholder.com/300x400"
          alt="Capa do Livro"
          variant="vertical"
        />
        <BookCard.Header>
          <Heading level="h5">O Hobbit</Heading>
        </BookCard.Header>
        <BookCard.Content>
          <Text>Uma jornada inesperada através da Terra Média.</Text>
        </BookCard.Content>
        <BookCard.Footer>
          <Link href="#">Ver Detalhes</Link>
        </BookCard.Footer>
      </BookCard>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <BookCard className="flex flex-row gap-4 items-center">
      <BookCard.Image
        src="https://via.placeholder.com/300x400"
        alt="Capa do Livro"
        variant="horizontal"
      />
      <div className="flex flex-col">
        <BookCard.Header>
          <Heading level="h5">Design Patterns</Heading>
        </BookCard.Header>
        <BookCard.Content>
          <Text>Elementos de software reutilizáveis.</Text>
        </BookCard.Content>
      </div>
    </BookCard>
  ),
};

export const OnlyImage: Story = {
  render: () => (
    <div className="w-48">
      <BookCard.Image
        src="https://via.placeholder.com/300x400"
        alt="Apenas imagem"
      />
    </div>
  ),
};
