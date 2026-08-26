"use client";

import { useLanguage } from "@/lib/language-context";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="bg-paper py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            {t.howItWorks.h2}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {t.howItWorks.steps.map((step, i) => (
            <div key={step.title}>
              <div
                className="font-serif text-[44px] font-semibold text-accent-soft"
                style={{ WebkitTextStroke: "1.5px var(--color-accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <hr className="mt-[18px] h-px border-0 bg-line" />
              <h3 className="mt-[18px] text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
