import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CFO.ai — El CFO con inteligencia artificial para tu PyME",
  description:
    "CFO.ai ayuda a tu equipo de finanzas a anticipar problemas de caja, proyectar flujo de fondos y tomar mejores decisiones, con inteligencia artificial explicable y validada por PyMEs uruguayas.",
  openGraph: {
    title: "CFO.ai — El CFO con inteligencia artificial para tu PyME",
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
        {children}
      </body>
    </html>
  );
}
