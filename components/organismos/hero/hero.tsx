import Image from 'next/image';

import HeroImagem from '@/assets/iconAbstract.png';
import { Button } from '@/components/atomos/button/button';
import { Typography } from '@/components/atomos/typography/typography';

export default function Hero() {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-between">
      <div className="flex flex-col gap-2">
        <Typography variant="h1" as="h1">
          Desenvolvimento Fullstack
        </Typography>
        <Typography variant="h2">Utilizando Nexts + Storybook</Typography>
        <Typography variant="p">
          Componentizar e criar a documentação com teste é o novo momento
        </Typography>
        <Button size="md">Quero Conhecer</Button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={HeroImagem} alt="" />
      </div>
    </section>
  );
}
