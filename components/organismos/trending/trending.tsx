import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { SectionLayout } from '@/components/layouts/sectionLayout/sectionLayout';
import { BookCard } from '@/components/moleculas/bookCard/bookCard';
import capaExemplo from '@/public/logo/capaLivroEx.png';

const livros = [
  {
    cover: capaExemplo,
    title: 'Nome Livro',
    description: 'Descrição curta do livro exemplo.',
    href: '@/public/logo/capaLivroEx.png',
  },
  {
    cover: capaExemplo,
    title: 'Nome Livro',
    description: 'Descrição curta do livro exemplo.',
    href: '/',
  },
  {
    cover: capaExemplo,
    title: 'Nome Livro',
    description: 'Descrição curta do livro exemplo.',
    href: '/',
  },
];

export default function Trending() {
  return (
    <SectionLayout background="primary">
      <Heading level="h2" align="center" className="text-primary-foreground">
        Melhores da Semana
      </Heading>

      <div className="flex flex-row gap-4 items-center justify-center">
        {livros.map((livro, index) => (
          <BookCard key={index}>
            <BookCard.Image src={livro.cover} alt={livro.title} />
            <BookCard.Header>
              <Heading level="h5">{livro.title}</Heading>
            </BookCard.Header>

            <BookCard.Content>
              <Text>{livro.description}</Text>
            </BookCard.Content>

            <BookCard.Footer>
              <Link href={livro.href}>Ler mais</Link>
            </BookCard.Footer>
          </BookCard>
        ))}
      </div>
    </SectionLayout>
  );
}
