import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { SectionLayout } from '@/components/layouts/sectionLayout/sectionLayout';
import { BookCard } from '@/components/moleculas/bookCard/bookCard';
import { getBookById } from '@/services/googleBooks.service';
import { GoogleBook } from '@/types/google-books';

const BOOK_IDS = ['zyTCAlFPjgYC', 'uW3XAAAAMAAJ', 'm8dPPgAACAAJ'];

export async function getBooksByIds(
  ids: string[],
): Promise<(GoogleBook | null)[]> {
  return Promise.all(ids.map((id) => getBookById(id)));
}

export default async function Trending() {
  const response = await getBooksByIds(BOOK_IDS);
  const books = response.filter((book): book is GoogleBook => book !== null);
  return (
    <SectionLayout background="primary">
      <Heading level="h2" align="center" className="text-primary-foreground">
        Melhores da Semana
      </Heading>

      <div className="flex flex-row gap-4 items-center justify-center">
        {books.map((book) => {
          const { id, volumeInfo } = book;

          return (
            <BookCard key={id}>
              {volumeInfo.imageLinks?.thumbnail && (
                <BookCard.Image
                  src={volumeInfo.imageLinks.thumbnail}
                  alt={volumeInfo.title}
                />
              )}

              <BookCard.Header>
                <Heading level="h5">{volumeInfo.title}</Heading>
              </BookCard.Header>

              <BookCard.Content>
                <Text>
                  {volumeInfo.authors?.join(', ') ?? 'Autor desconhecido'}
                </Text>
              </BookCard.Content>

              <BookCard.Footer>
                <Link href={`/books/${id}`}>Ler mais</Link>
              </BookCard.Footer>
            </BookCard>
          );
        })}
      </div>
    </SectionLayout>
  );
}
