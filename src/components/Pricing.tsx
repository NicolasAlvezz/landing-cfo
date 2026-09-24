"use client";

import { useLanguage } from "@/lib/language-context";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";

const HIGHLIGHTED_INDEX = 1;

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="precios" className="bg-paper py-[76px] sm:py-[72px]">
      <div className="container-page">
        <Reveal className="max-w-[640px]">
          <SectionEyebrow index="07">{t.pricing.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl">
            {t.pricing.h2}
          </h2>
          <p className="mt-4.5 text-base leading-relaxed text-ink-soft sm:text-[16.5px]">
            {t.pricing.p}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((plan, i) => {
            const highlighted = i === HIGHLIGHTED_INDEX;
            return (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-[3px] border p-[26px] transition-transform duration-300 hover:-translate-y-1 ${
                    highlighted
                      ? "border-line-dark bg-ink hover:shadow-[0_20px_40px_-20px_rgba(192,132,58,0.35)]"
                      : "border-line bg-white hover:shadow-[0_20px_40px_-24px_rgba(7,19,47,0.18)]"
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
                        <CheckIcon
                          color={highlighted ? "var(--color-accent)" : undefined}
                          className={`mt-0.5 shrink-0 ${highlighted ? "" : "text-ink-soft"}`}
                        />
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
