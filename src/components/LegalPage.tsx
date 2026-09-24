import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-paper py-16 sm:py-20">
        <div className="container-page max-w-[760px]">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-faint">
            Última actualización: {updated}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-[-0.01em] text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 rounded-[3px] border border-line bg-paper-alt px-5 py-4 text-[13.5px] leading-relaxed text-ink-soft">
            Esta página está solo en español porque referencia la legislación uruguaya. This
            page is only available in Spanish, since it references Uruguayan law — write to{" "}
            <a href="mailto:nicoalvez28@gmail.com" className="focus-ring rounded-[2px] font-semibold text-accent-dark underline underline-offset-2">
              nicoalvez28@gmail.com
            </a>{" "}
            for an English summary.
          </p>
          <div className="prose-legal mt-10 flex flex-col gap-7 text-[15px] leading-relaxed text-ink-soft">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
