import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Iniciando Teste",
  description: "Pagina ambiente 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
