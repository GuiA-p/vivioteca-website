import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { SectionLayout } from '@/components/layouts/sectionLayout/sectionLayout';

export default function AboutPage() {
  return (
    <SectionLayout>
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
    </SectionLayout>
  );
}
