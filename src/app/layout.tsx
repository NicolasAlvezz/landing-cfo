import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Finora — El CFO con inteligencia artificial para tu empresa",
  description:
    "Finora ayuda a tu equipo de finanzas a anticipar problemas de caja, proyectar flujo de fondos y tomar mejores decisiones, con inteligencia artificial explicable y validada por empresas uruguayas.",
  openGraph: {
    title: "Finora — El CFO con inteligencia artificial para tu empresa",
    description:
      "Anticipá tu flujo de caja, entendé tu rentabilidad y tomá mejores decisiones financieras con el apoyo de IA. Sin reemplazar a tu contador.",
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
