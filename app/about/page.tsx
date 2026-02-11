import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { PageLayout } from '@/components/layouts/pageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto py-12 px-6 space-y-6">
        <Heading level="h1" color="primary">
          Nossa História
        </Heading>

        <Text size="lg" weight="medium">
          Este é um texto de introdução com um pouco mais de destaque e um
          espaçamento confortável.
        </Text>

        <Text variant="muted">
          Este texto usa a cor 'muted', perfeita para parágrafos secundários ou
          informações que não devem gritar na tela.
        </Text>

        <Heading
          level="h6"
          align="center"
          className="border-t border-border pt-4"
        >
          Organic Earth Design System
        </Heading>
      </div>
    </PageLayout>
  );
}
