"use client";

import { useLanguage } from "@/lib/language-context";

const HIGHLIGHTED_INDEX = 1;

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="precios" className="bg-paper py-[76px] sm:py-[72px]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
            {t.pricing.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.pricing.h2}
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            {t.pricing.p}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((plan, i) => {
            const highlighted = i === HIGHLIGHTED_INDEX;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[3px] border p-[26px] ${
                  highlighted ? "border-line-dark bg-ink" : "border-line bg-white"
                }`}
              >
                {highlighted && (
                  <span className="absolute -top-[13px] left-[30px] rounded-full bg-accent px-3 py-[5px] text-[11.5px] font-semibold text-ink">
                    {t.pricing.mostChosen}
                  </span>
                )}
                <h3 className={`font-heading text-[17px] font-bold tracking-[-0.01em] ${highlighted ? "text-bone" : "text-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-[12.5px] ${highlighted ? "text-fog" : "text-ink-faint"}`}>
                  {plan.audience}
                </p>

                <hr className={`my-[22px] h-px border-0 ${highlighted ? "bg-line-dark" : "bg-line"}`} />

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={highlighted ? "var(--color-accent)" : "currentColor"}
                        strokeWidth="2.6"
                        className={`mt-0.5 shrink-0 ${highlighted ? "" : "text-ink-soft"}`}
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={highlighted ? "text-fog" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={`mt-[26px] inline-flex w-full items-center justify-center rounded-[3px] px-5 py-[13px] text-[14.5px] font-semibold transition-opacity hover:opacity-90 ${
                    highlighted ? "bg-accent text-ink" : "border border-line text-ink"
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
