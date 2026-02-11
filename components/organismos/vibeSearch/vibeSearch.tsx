import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { InputSeach } from '@/components/moleculas/inputSearch/inputSeach';

export default function VibeSearch() {
  return (
    <section className="space-y-6 flex flex-col">
      <Heading level="h2" align="center">
        Categorias
      </Heading>
      <div className="flex flex-row gap-8 items-center justify-center">
        <Link href="/">Romance</Link>
        <Link href="/">Aventura</Link>
        <Link href="/">Mistério</Link>
        <Link href="/">Biografia</Link>
        <Link href="/">Ficção</Link>
      </div>
      <InputSeach />
    </section>
  );
}
