import { Heading } from '@/components/atomos/typography/heading/heading';
import { BookCard } from '@/components/moleculas/Cards/trendingCard/bookCard';
import capaExemplo from '@/public/logo/capaLivroEx.png';

const livros = [
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
    <section className="space-y-6">
      <Heading level="h2" align="center">
        Trending
      </Heading>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {livros.map((livro, index) => (
          <BookCard key={index} {...livro} />
        ))}
      </div>
    </section>
  );
}
