"use client";

import { useLanguage } from "@/lib/language-context";

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
        <div className="flex items-baseline gap-0.5 font-serif text-lg font-semibold text-ink">
          Fin<span className="italic text-accent">ora</span>
        </div>

        <p className="max-w-[420px] text-center text-[12.5px] text-ink-faint">{t.footer.tagline}</p>

        <a
          href={`mailto:${CONTACT_EMAILS.join(",")}`}
          className="text-[12.5px] font-semibold text-accent-dark"
        >
          {t.footer.contact}
        </a>
      </div>
      <div className="border-t border-line py-5 text-center text-[11.5px] text-ink-faint">
        © {new Date().getFullYear()} Finora. {t.footer.copyright}
      </div>
    </footer>
  );
}
