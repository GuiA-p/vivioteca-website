import { Link } from '@/components/atomos/link/link';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { SectionLayout } from '@/components/layouts/sectionLayout/sectionLayout';

export default function notFound() {
  return (
    <SectionLayout className="h-[92vh] items-center justify-center">
      <Heading level="h1" align="center">
        404
      </Heading>
      <Text>Pagina não encontrada...</Text>
      <Link href="/" underline={true}>
        Voltar para home
      </Link>
    </SectionLayout>
  );
}
