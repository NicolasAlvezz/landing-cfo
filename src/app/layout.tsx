import type { Metadata } from "next";
import { Sora, Figtree, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finora — Asistente financiero con IA para tu pyme",
  description:
    "Finora se conecta a tu Odoo o tu planilla, proyecta tu caja a 30, 60 y 90 días y te avisa antes de que falte plata. Cada número muestra de dónde sale, y tu contador lo valida.",
  openGraph: {
    title: "Finora — Asistente financiero con IA para tu pyme",
    description:
      "Anticipá tu flujo de caja, entendé tu rentabilidad y tomá mejores decisiones financieras con el apoyo de IA. Sin reemplazar a tu contador.",
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`h-full antialiased ${sora.variable} ${figtree.variable} ${plexMono.variable} ${newsreader.variable}`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
