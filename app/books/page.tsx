import { Link } from "@/components/atomos/link/link";
import { Heading } from "@/components/atomos/typography/heading/heading";
import { Text } from "@/components/atomos/typography/text/text";
import { BookCard } from "@/components/moleculas/bookCard/bookCard";


type GoogleBook = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
};



async function getBooks(query: string): Promise<GoogleBook[]> {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.items ?? [];
}

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "javascript";
  const books = await getBooks(query);

  return (
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} size="md" variant="vertical">
            {book.volumeInfo.imageLinks?.thumbnail && (
              <BookCard.Image
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            )}

            <BookCard.Header>
                <Heading level='h5'>
                {book.volumeInfo.title}
                </Heading>
            </BookCard.Header>

            <BookCard.Content>
                <Text >
                {book.volumeInfo.authors?.join(", ") ||
                  "Autor desconhecido"}
                </Text>
            </BookCard.Content>

            <BookCard.Footer>
              <Link href={`/books/${book.id}`}>Ler mais</Link>
            </BookCard.Footer>
          </BookCard>
        ))}
      </div>
    </main>
  );
}
