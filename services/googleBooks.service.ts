import { GoogleBook, GoogleBooksResponse } from '@/types/google-books';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

if (!API_KEY) {
  throw new Error('GOOGLE_BOOKS_API_KEY não definida no .env');
}

async function safeFetch<T>(
  url: string,
  revalidate: number,
  retries = 2,
): Promise<T | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate },
    });

    if (res.status === 429 && retries > 0) {
      console.warn('Rate limit atingido. Tentando novamente...');
      await new Promise((r) => setTimeout(r, 1000));
      return safeFetch<T>(url, revalidate, retries - 1);
    }

    if (!res.ok) {
      console.error('Google API error:', res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Network error:', error);
    return null;
  }
}

export async function searchBooks(query: string): Promise<GoogleBook[]> {
  if (!query.trim()) return [];

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}`;

  const data = await safeFetch<GoogleBooksResponse>(url, 300);

  return data?.items ?? [];
}

export async function getBookById(id: string): Promise<GoogleBook | null> {
  const url = `${BASE_URL}/${id}?key=${API_KEY}`;

  return safeFetch<GoogleBook>(url, 600);
}
