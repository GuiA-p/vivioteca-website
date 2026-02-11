import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Comfortaa, Domine } from 'next/font/google';

import { Footer } from '@/components/organismos/footer/footer';
import { Header } from '@/components/organismos/header/header';

const domine = Domine({
  subsets: ['latin'],
  variable: '--font-domine',
  weight: ['400', '500', '600', '700'],
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Vivioteca - Indicações de livros para ler',
  description: 'Busque algo para ler e comente oque achou do livro que já leu.',
  icons: {
    icon: '/logo/logoIcon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${domine.variable} ${comfortaa.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
