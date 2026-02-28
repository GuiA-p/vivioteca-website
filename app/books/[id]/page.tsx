import Image from 'next/image';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getBookById(id: string) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return null;

  return res.json();
}

// 🔥 SEO dinâmico
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) return {};

  return {
    title: book.volumeInfo.title,
    description: book.volumeInfo.description?.slice(0, 150),
  };
}

export default async function BookPage({ params }: PageProps) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) return notFound();

  const info = book.volumeInfo;

  return (
    <main className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* 📚 Capa */}
        <div className="relative w-full aspect-[3/4] max-w-sm">
          {info.imageLinks?.thumbnail ? (
            <Image
              src={info.imageLinks.thumbnail}
              alt={info.title}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full rounded-lg" />
          )}
        </div>

        {/* 📖 Informações */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{info.title}</h1>

          <p className="text-lg text-gray-500">
            {info.authors?.join(', ') || 'Autor desconhecido'}
          </p>

          {info.publisher && (
            <p className="text-sm">
              <strong>Editora:</strong> {info.publisher}
            </p>
          )}

          {info.publishedDate && (
            <p className="text-sm">
              <strong>Publicado em:</strong> {info.publishedDate}
            </p>
          )}

          {info.pageCount && (
            <p className="text-sm">
              <strong>Páginas:</strong> {info.pageCount}
            </p>
          )}

          {info.description && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Descrição</h2>
              <div
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: info.description,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
