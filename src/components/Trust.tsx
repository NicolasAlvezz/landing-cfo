"use client";

import { useLanguage } from "@/lib/language-context";

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink py-[76px] sm:py-[76px]">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.78_0.09_50)]">
              {t.trust.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-[26px] font-semibold leading-tight text-white sm:text-4xl">
              {t.trust.h2}
            </h2>
            <p className="mt-4.5 max-w-[400px] text-base leading-relaxed text-[oklch(0.65_0.015_55)]">
              {t.trust.p}
            </p>
          </div>

          <div className="flex flex-col">
            {t.trust.concerns.map((item, i) => (
              <div
                key={item.concern}
                className={`flex gap-4 py-[22px] ${i === t.trust.concerns.length - 1 ? "border-y" : "border-t"} border-[oklch(0.3_0.02_50)]`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2.4"
                  className="mt-1 shrink-0"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className={`text-[15px] font-semibold text-white ${item.italic ? "italic" : ""}`}>
                    {item.concern}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[oklch(0.6_0.015_55)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
