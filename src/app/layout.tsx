import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Carlos Ferreira | Desenvolvedor Full-Stack",
  description: "Portfólio de Gabriel Carlos Ferreira, desenvolvedor Full-Stack focado em criar produtos, ferramentas e jogos para a web. Conheça meus projetos.",
  keywords: ["Gabriel Carlos Ferreira", "Desenvolvedor", "Full-Stack", "Web", "React", "Next.js", "Vue", "NestJs", "NodeJs", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS", "PostgreSQL", "MongoDB", "Git", "GitHub", "Front-end", "Back-end", "Portfólio"],
  authors: [{ name: "Gabriel Carlos Ferreira" }],
  creator: "Gabriel Carlos Ferreira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.gbrldev.com/",
    emails: ["[gabriel.developed@gmail.com]"],
    title: "Gabriel Carlos Ferreira | Desenvolvedor Full-Stack",
    description: "Explorar o portfólio de Gabriel Carlos Ferreira, desenvolvedor Full-Stack especializado em plataformas e soluções criativas para a web.",
    siteName: "Gabriel Carlos Ferreira - Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Carlos Ferreira | Desenvolvedor Full-Stack",
    description: "Explorar o portfólio de Gabriel Carlos Ferreira, desenvolvedor Full-Stack especializado em plataformas e soluções criativas para a web.",
    creator: "@gbrl_str",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
