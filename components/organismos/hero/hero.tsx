import Image from 'next/image';

import HeroImagem from '@/assets/element.svg';
import { Button } from '@/components/atomos/button/button';
import { Heading } from '@/components/atomos/typography/heading/heading';
import { Text } from '@/components/atomos/typography/text/text';
import { SectionLayout } from '@/components/layouts/sectionLayout/sectionLayout';

export default function Hero() {
  return (
    <SectionLayout
      padding="lg"
      className="grid grid-cols-1 md:grid-cols-2 items-center"
    >
      <div className="flex flex-col gap-2">
        <Heading level="h1">Ache um livro para ler</Heading>
        <Heading level="h4" color="muted">
          Selecionando os melhores para você!
        </Heading>
        <Text>
          Já se deparou com a situação de não saber oque ler? Aqui você encontra
          os livros melhores avaliados por quem já leu.
        </Text>

        <Button variant="primary" size="md">
          Quero Conhecer
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={HeroImagem} alt="" />
      </div>
    </SectionLayout>
  );
}
