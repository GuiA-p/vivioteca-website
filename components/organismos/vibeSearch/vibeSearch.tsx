import { Button } from '@/components/atomos/button/button';
import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { SectionLayout } from '@/components/layouts/sectionLayout/sectionLayout';
import { InputSearch } from '@/components/moleculas/seachBox/seachBox';

const CATEGORY = [
  {
    category: 'Romance',
    href: '/',
  },
  {
    category: 'Aventura',
    href: '/',
  },
  {
    category: 'Mistério',
    href: '/',
  },
  {
    category: 'Biografia',
    href: '/',
  },
  {
    category: 'Ficção',
    href: '/',
  },
];
export default function VibeSearch() {
  return (
    <SectionLayout>
      <Heading level="h2" align="center">
        Categorias
      </Heading>
      <div className="flex flex-row gap-8 items-center justify-center">
        {CATEGORY.map((e) => {
          return (
            <Button key={e.category} variant='subgect'>
              {e.category}
            </Button>
          );
        })}
      </div>
      <InputSearch />
    </SectionLayout>
  );
}
