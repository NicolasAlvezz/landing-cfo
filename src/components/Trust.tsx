"use client";

import { useLanguage } from "@/lib/language-context";

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink py-[76px] sm:py-[76px]">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent">
              {t.trust.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-[26px] font-bold leading-tight tracking-[-0.01em] text-bone sm:text-4xl">
              {t.trust.h2}
            </h2>
            <p className="mt-4.5 max-w-[400px] text-base leading-relaxed text-fog">
              {t.trust.p}
            </p>
          </div>

          <div className="flex flex-col">
            {t.trust.concerns.map((item, i) => (
              <div
                key={item.concern}
                className={`flex gap-4 py-[22px] ${i === t.trust.concerns.length - 1 ? "border-y" : "border-t"} border-line-dark`}
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
                  <p className={`text-[15px] font-semibold text-bone ${item.italic ? "font-accent-italic font-semibold" : ""}`}>
                    {item.concern}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fog">
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
