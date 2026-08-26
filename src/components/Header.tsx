"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#producto", label: "Producto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#validacion", label: "Validación" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="container-page flex h-[76px] items-center justify-between">
        <Link
          href="#top"
          className="flex items-baseline gap-0.5 font-serif text-[22px] font-semibold text-ink"
        >
          CFO<span className="italic text-accent">.ai</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-[3px] bg-accent px-[22px] py-[11px] text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Agendar demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-line text-ink"
          aria-label="Abrir menú"
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

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
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
              className="mt-2 inline-flex items-center justify-center rounded-[3px] bg-accent px-5 py-2.5 text-sm font-semibold text-white"
            >
              Agendar demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
