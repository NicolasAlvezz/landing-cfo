"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { FinoraLogo } from "@/components/FinoraMark";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="container-page flex h-[76px] items-center justify-between">
        <Link href="#top" aria-label="Finora">
          <FinoraLogo markSize={19} textClassName="text-ink" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {t.header.nav.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center justify-center rounded-[3px] border border-line px-3 py-[9px] font-mono text-xs font-medium uppercase tracking-[0.06em] text-ink-soft transition-colors hover:border-ink hover:text-ink"
            aria-label="Switch language / Cambiar idioma"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-[3px] bg-accent px-[22px] py-[11px] text-sm font-semibold text-bone transition-opacity hover:opacity-90"
          >
            {t.header.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex h-10 items-center justify-center rounded-[3px] border border-line px-3 font-mono text-xs font-medium uppercase tracking-[0.06em] text-ink-soft"
            aria-label="Switch language / Cambiar idioma"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-line text-ink"
            aria-label={t.header.openMenu}
            aria-expanded={open}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <nav className="container-page flex flex-col gap-1 py-4">
            {t.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[3px] px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper-alt hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[3px] bg-accent px-5 py-2.5 text-sm font-semibold text-bone"
            >
              {t.header.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
