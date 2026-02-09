import { Footer } from '@/components/organismos/footer/footer';
import { Header } from '@/components/organismos/header/header';
import '@/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciando Teste',
  description: 'Pagina ambiente 1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
