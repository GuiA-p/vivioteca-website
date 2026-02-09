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
      <body>{children}</body>
    </html>
  );
}
