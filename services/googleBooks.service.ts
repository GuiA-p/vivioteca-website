import { GoogleBook, GoogleBooksResponse } from '@/types/google-books';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`Erro API: ${res.status}`);
  }

  return res.json();
}

export async function searchBooks(query: string): Promise<GoogleBook[]> {
  const res = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`, {
    next: { revalidate: 60 }, // ISR 1 min
  });

  const data = await handleResponse<GoogleBooksResponse>(res);

  return data.items ?? [];
}

export async function getBookById(id: string): Promise<GoogleBook> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    next: { revalidate: 300 }, // cache 5 min
  });

  return handleResponse<GoogleBook>(res);
}

export async function getBooksByIds(ids: string[]): Promise<GoogleBook[]> {
  const requests = ids.map((id) =>
    fetch(`${BASE_URL}/${id}`, {
      next: { revalidate: 3600 }, // cache 1h
    }).then((res) => handleResponse<GoogleBook>(res)),
  );

  return Promise.all(requests);
}
