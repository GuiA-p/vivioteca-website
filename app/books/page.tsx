import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { BookCard } from '@/components/moleculas/bookCard/bookCard';
import { searchBooks } from '@/services/googleBooks.service';
import { GoogleBook } from '@/types/google-books';

interface BooksPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
  // --- CORREÇÃO AQUI ---
  // Primeiro resolvemos a Promise, depois pegamos o 'q'
  const resolvedParams = await searchParams;
  const query = resolvedParams.q ?? 'javascript';
  // ---------------------

  const books: GoogleBook[] = await searchBooks(query);

  return (
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {books?.map((book) => { // Adicionado um '?' por segurança caso searchBooks falhe
          const { id, volumeInfo } = book;
          const { title, authors, imageLinks } = volumeInfo;

          return (
            <BookCard key={id} size="md" variant="vertical">
              {imageLinks?.thumbnail && (
                <BookCard.Image src={imageLinks.thumbnail} alt={title} />
              )}

              <BookCard.Header>
                <Heading level="h5">{title}</Heading>
              </BookCard.Header>

              <BookCard.Content>
                <Text>{authors?.join(', ') ?? 'Autor desconhecido'}</Text>
              </BookCard.Content>

              <BookCard.Footer>
                <Link href={`/books/${id}`}>Ler mais</Link>
              </BookCard.Footer>
            </BookCard>
          );
        })}
      </div>
    </main>
  );
}