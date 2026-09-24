"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="border-t border-line bg-paper-alt py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.faq.h2}
          </h2>
        </div>

        <div className="mt-12 max-w-[820px]">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-semibold text-ink sm:text-[17px]">
                    {item.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`shrink-0 text-ink-faint transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="max-w-[680px] pb-7">
                    <p className="text-[14.5px] leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
