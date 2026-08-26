"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#producto", label: "Producto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#validacion", label: "Validación" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white text-sm font-bold">
            CX
          </span>
          CFO<span className="text-brand">.ai</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink-soft">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-md"
          >
            Agendar demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink"
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
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-alt hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Agendar demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
