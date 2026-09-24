"use client";

import { useLanguage } from "@/lib/language-context";

export default function Validation() {
  const { t } = useLanguage();

  return (
    <section id="validacion" className="border-b border-line bg-paper-alt py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            {t.validation.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.validation.h2}
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            {t.validation.p}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
          <div className="bg-white p-8">
            <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-faint">
              {t.validation.card1.title}
            </h3>
            <p className="mt-3.5 font-heading text-xl font-bold leading-snug tracking-[-0.01em] text-ink">
              {t.validation.card1.desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.validation.sectors.map((s) => (
                <span
                  key={s}
                  className="inline-flex whitespace-nowrap rounded-full border border-line bg-white px-[15px] py-[7px] text-[13px] font-medium text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-faint">
              {t.validation.card2.title}
            </h3>
            <p className="mt-3.5 font-heading text-xl font-bold leading-snug tracking-[-0.01em] text-ink">
              {t.validation.card2.desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.validation.systems.map((s) => (
                <span
                  key={s}
                  className="inline-flex whitespace-nowrap rounded-full border border-line bg-paper px-[15px] py-[7px] text-[13px] font-medium text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink-faint">
              {t.validation.card3.title}
            </h3>
            <p className="mt-3.5 font-heading text-2xl font-bold leading-snug tracking-[-0.01em] text-ink">
              {t.validation.card3.desc}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{t.validation.card3.sub}</p>
          </div>
        </div>

        <p className="mt-9 max-w-[640px] text-sm leading-relaxed text-ink-faint">
          {t.validation.footer}
        </p>
      </div>
    </section>
  );
}
