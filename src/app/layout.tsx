"use client";

import "../styles/globals.css";

// components
import Footer from "../components/Footer";
import Header from "../components/Header";

import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Portfólio - Gustavo Santana</title>
        <meta
          name="description"
          content="
        Olá, meu nome é Gustavo Santana, sou desenvolvedor web e apaixonado por tecnologia.
        "
        />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Header />
          <div className="h-px bg-gray-300 bg-gradient-line"></div>
          {children}
          <div className="h-px bg-gray-300 bg-gradient-line"></div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
