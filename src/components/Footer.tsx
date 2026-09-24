"use client";

import { useLanguage } from "@/lib/language-context";
import { FinoraLogo } from "@/components/FinoraMark";

const CONTACT_EMAILS = [
  "emivan12@gmail.com",
  "nicoalvez28@gmail.com",
  "tomasckian@gmail.com",
  "maurellinacho@gmail.com",
  "tomyfugassa@gmail.com",
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page flex flex-col items-center justify-between gap-5 py-11 sm:flex-row">
        <FinoraLogo markSize={16} textClassName="text-ink" className="text-base" />

        <p className="max-w-[420px] text-center text-[12.5px] text-ink-faint">{t.footer.tagline}</p>

        <a
          href={`mailto:${CONTACT_EMAILS.join(",")}`}
          className="focus-ring rounded-[2px] text-[12.5px] font-semibold text-accent-dark"
        >
          {t.footer.contact}
        </a>
      </div>
      <div className="border-t border-line py-5">
        <nav className="container-page flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {t.footer.legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-[2px] text-[11.5px] font-medium text-ink-soft underline-offset-2 hover:text-ink hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line py-5 text-center font-mono text-[11px] tracking-[0.02em] text-ink-faint">
        © {new Date().getFullYear()} Finora. {t.footer.copyright}
      </div>
    </footer>
  );
}
