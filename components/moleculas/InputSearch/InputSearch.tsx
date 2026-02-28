'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Button } from '@/components/atomos/button/button';
import { Input } from '@/components/atomos/input/input';

const InputSearchContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [text, setText] = useState(query || '');

  useEffect(() => {
    setText(query || '');
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      router.push('/books');
      return;
    }

    router.push(`/books?q=${encodeURIComponent(text)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-4">
      <Input
        value={text}
        variant="search"
        onChange={(e) => setText(e.target.value)}
        placeholder="Pesquise por título ou autor..."
        leftIcon={<FiSearch size={18} />}
      />
      <Button type="submit" variant="ghost">
        Pesquisar
      </Button>
    </form>
  );
};

const InputSearch = () => {
  return (
    <Suspense fallback={<div className="h-10 w-full animate-pulse bg-gray-200 rounded" />}>
      <InputSearchContent />
    </Suspense>
  );
};

export { InputSearch };